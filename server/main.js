import Empirica from "meteor/empirica:core";
import { Random } from 'meteor/random'

import "./callbacks.js";
import "./bots.js";

import {
  data,
} from "./constants.js";

Empirica.gameInit((game, treatment, players) => {
  const { roundCount } = treatment;
  const willHappenCount = Math.round(0.5 * roundCount);
  // global cue has 75% accuracy
  const globalCueAccuracy = 0.75;
  const localCueAccuracy = 0.65;
  const globalInaccurateCount = Math.round((1 - globalCueAccuracy) * roundCount);
  // local cue has 70% accuracy
  const localInaccurateCount = Math.round((1 - localCueAccuracy) * roundCount);

  game.set("globalCueAccuracy", globalCueAccuracy);
  game.set("localCueAccuracy", localCueAccuracy);

  // Deep clone and shuffle
  const clonedifps = JSON.parse(JSON.stringify(data.ifps));
  const ifps = _.shuffle(clonedifps).slice(0, roundCount);

  // This loop is a HACK to just fill out the IFPs while testing.
  // Eventually there should be as much or more potential IFPs as rounds.
  // TODO Remove this once we have enough data.
  while (ifps.length < roundCount) {
    for (let i = 0; i < ifps.length; i++) {
      if (ifps.length === roundCount) {
        break;
      }
      ifps.push(ifps[i]);
    }
  }

  // Array of indices we'll be using for the random asignments.
  const indices = Array.from(Array(roundCount).keys());

  // "Randomly select ½ of the questions and assign T=1 (in our simulated world,
  // these events will happen) and the other half to T=-1 (these events will not
  // happen)."
  const willHappenIndices = _.shuffle(indices).slice(0, willHappenCount);

  // "Select 25% of IFPs and invert the S of the Global cue (if -1 then take +1
  // and viceversa) S(G)=-T"
  const globalInaccurates = _.shuffle(indices).slice(0, globalInaccurateCount);

  ifps.forEach((ifp, i) => {
    ifp.willHappen = willHappenIndices.includes(i);
    // When the global is accurate it is accurate for everyone.
    // For local, each individual player can have different values.
    ifp.globalAccurate = !globalInaccurates.includes(i);
  });

  _.times(roundCount, i => {
    const round = game.addRound();
    round.set("ifp", ifps[i]);
    const stages = [
      {
        name: "response",
        displayName: "Response",
        durationInSeconds: 15
      },
      {
        name: "feedback",
        displayName: "Feedback",
        durationInSeconds: 5
      },
    ];
    round.addStage(stages[0]);
    round.addStage(stages[1]);
  });

  players.forEach(player => {
    // Assign random unique avatar to each player
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    // Start with a 0 score
    player.set("score", 0);
    player.set("roundsCount", roundCount);

    // Make source assignments: "For each player: randomly allocate one Source
    // to one Cue type. I.e. for some players source X will be Global and Y will
    // be Local, but for others X will be Local and Y will be Global. Although
    // in real life Source and Cue are the same thing, here is better if we
    // separate the source (i.e. logo and twitter name) from the generative
    // model underlying it (Global vs Local nature of the information that the
    // source provides) This avoids biases like the “X-pert” sounds more
    // trustworthy than the “Wh-Y” or CNN is typically more trustworthy than
    // BBC"
    const globalSource = Random.choice(data.sources);
    const sourcesWithoutGlobal = _.without(data.sources, globalSource);
    const localSource = Random.choice(sourcesWithoutGlobal);
    player.set("globalSource", globalSource);
    player.set("localSource", localSource);

    // Assigning random sides (we randomly assign left, right inferred)
    const roundLeftSide = [];
    _.times(roundCount, i => {
      roundLeftSide.push(Random.choice(["local", "global"]));
    });
    player.set("roundLeftSide", roundLeftSide);

    // "For each player: select a random subset of 30% of IFPs and switch S.
    // S_i(L)=-T for every player i"
    const localInacc = _.shuffle(indices).slice(0, localInaccurateCount);
    const roundLocalAccurate = [];
    _.times(roundCount, i => {
      roundLocalAccurate[i] = !localInacc.includes(i);
    });
    player.set("roundLocalAccurate", roundLocalAccurate);
  });
});

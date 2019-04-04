import moment from "moment";

import {
  data,
  globalInaccurateCount,
  localInaccurateCount,
  roundCount,
  willHappenCount
} from "./constants.js";

export const init = (treatment, players) => {
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
    ifp.globalAccurate = !globalInaccurates.includes(i);

    const days = Math.round(Math.random() * 3 + 20);
    const hours = Math.round(Math.random() * 4);
    const addSubtract = Random.choice(["add", "subtract"]);
    const period = moment()
      .subtract(days, "days")
      [addSubtract](hours, "hours");
    const applyRandomVals = cue => {
      const minutes = Math.random() * 120;
      const addSub = Random.choice(["add", "subtract"]);
      cue.datetime = period[addSub](minutes, "minutes").toDate();
      cue.likes = Math.round(Math.random() * 8000) + 30000;
      cue.rts = Math.round(Math.random() * 3000) + 3000;
    };
    ifp.pro.forEach(applyRandomVals);
    ifp.against.forEach(applyRandomVals);

    // Leave random text for global cue
    ifp.chosen = {
      pro: Random.choice(ifp.pro),
      against: Random.choice(ifp.against)
    };
  });

  const rounds = [];
  _.times(roundCount, i => {
    const stages = [
      // {
      //   name: "advice",
      //   displayName: "Advice",
      //   durationInSeconds: 5
      // },
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
      // {
      //   name: "question",
      //   displayName: "Question",
      //   durationInSeconds: 10
      // }
    ];

    rounds.push({
      ifp: ifps[i],
      stages
    });
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

    // "For each player and each IFP: randomly allocate 1 pro signal and 1
    // against signal to X and 1 pro signal and 1 against signal to Y. We will
    // present only one signal per source." NOTE(np) This part does not make
    // sense to me. NOTE(np again) I made the global choice of cue global, so
    // could simplify this area, not worrying for now until sure.
    const roundSignals = [];
    _.times(roundCount, i => {
      const ifp = ifps[i];
      const global = {};
      const local = {};

      const globalPro = Random.choice(ifp.pro);
      global.pro = ifp.pro.indexOf(globalPro);
      const remainingPro = _.without(ifp.pro, globalPro);
      // const remainingPro = _.without(ifp.pro, ifp.chosen.pro);
      local.pro = ifp.pro.indexOf(Random.choice(remainingPro));

      const globalAgainst = Random.choice(ifp.against);
      global.against = ifp.against.indexOf(globalAgainst);
      const remainingAgainst = _.without(ifp.against, globalAgainst);
      // const remainingAgainst = _.without(ifp.against, ifp.chosen.against);
      local.against = ifp.against.indexOf(Random.choice(remainingAgainst));

      roundSignals.push({ global, local });
    });
    player.set("roundSignals", roundSignals);

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

  return {
    rounds,
    players
  };
};

// const fakePlayer = (player = {}) => {
//   player.data = player.data || {};
//   player.set = (key, value) => (player.data[key] = value);
//   return player;
// };

// console.log(
//   "results",
//   JSON.stringify(init({}, [fakePlayer(), fakePlayer()]), null, "  ")
// );

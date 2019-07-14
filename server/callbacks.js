import Empirica from "meteor/empirica:core";

// onGameStart is triggered opnce per game before the game starts, and before
// the first onRoundStart. It receives the game and list of all the players in
// the game.
Empirica.onGameStart((game, players) => {
});

// onRoundStart is triggered before each round starts, and before onStageStart.
// It receives the same options as onGameStart, and the round that is starting.
Empirica.onRoundStart((game, round, players) => {
  console.log("Game: ", game.index, " finished Round number: ", round.index);
});

// onStageStart is triggered before each stage starts.
// It receives the same options as onRoundStart, and the stage that is starting.
Empirica.onStageStart((game, round, stage, players) => {});

// onStageEnd is triggered after each stage.
// It receives the same options as onRoundEnd, and the stage that just ended.
Empirica.onStageEnd((game, round, stage, players) => {
  if (stage.name !== "response") {
    return null;
  }

  const ifp = round.get("ifp");
  const isIndividualReward = game.treatment["reward"] === "individual";

  let correctVotesCount = 0;
  let numYesVotes = 0;
  let numVotes = 0;
  players.forEach(player => {
    const value = player.round.get("value");

    // If no response given, ignore rewarding, always wrong.
    if (!value && value !== 0) {
      const prevScore = player.get("score");
      player.round.set("score", prevScore);
      player.round.set("rewarded", false);
      return;
    }
    numVotes++;

    const thinksWillHappen = value > 50;
    if (thinksWillHappen) {
      numYesVotes++;
    }
    const correct = thinksWillHappen ? ifp.willHappen : !ifp.willHappen;
    player.round.set("correct", correct);
    player.round.set("yesOrNo", value > 50 ? "yes" : "no");
    if (correct) {
      correctVotesCount++;
    }

    const prevScore = player.get("score");
    if (isIndividualReward && correct) {
      const score = prevScore + 1;
      player.set("score", score);
      player.round.set("score", score);
      player.round.set("rewarded", true);
    } else if (isIndividualReward && !correct) {
      player.round.set("score", prevScore);
      player.round.set("rewarded", false);
    }
  });

  const isGroupCorrect =
    numVotes > 0 && // Can only be correct if there were votes
    (correctVotesCount === numVotes / 2 // If half correct (and half incorrect)
      ? Random.choice(true, false) // Choose randomly if correct
      : correctVotesCount > numVotes / 2); // Otherwise correct if majority correct
  round.set("isGroupCorrect", isGroupCorrect);
  round.set("numVotes", numVotes);
  round.set("numYesVotes", numYesVotes);
  round.set("groupYesOrNo", numYesVotes > numVotes - numYesVotes ? "yes" : "no");
  players.forEach(player => {
    const prevScore = player.get("score");
    if (!isIndividualReward && isGroupCorrect) {
      const score = prevScore + 1;
      player.set("score", score);
      player.round.set("score", score);
      player.round.set("rewarded", true);
    } else if (!isIndividualReward && !isGroupCorrect) {
      player.round.set("score", prevScore);
      player.round.set("rewarded", false);
    }
  });
});

// onRoundEnd is triggered after each round.
// It receives the same options as onGameEnd, and the round that just ended.
Empirica.onRoundEnd((game, round, players) => {});

// onGameEnd is triggered when the game ends.
// It receives the same options as onGameStart.
Empirica.onGameEnd((game, players) => {});


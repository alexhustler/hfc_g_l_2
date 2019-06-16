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

  let correctCount = 0;
  let yesCount = 0;
  let votedCount = 0;
  players.forEach(player => {
    const value = player.round.get("value");

    // If no response given, ignore rewarding, always wrong.
    if (!value && value !== 0) {
      return;
    }
    votedCount++;

    const thinksWillHappen = value > 50;
    if (thinksWillHappen) {
      yesCount++;
    }
    const correct = thinksWillHappen ? ifp.willHappen : !ifp.willHappen;
    player.round.set("correct", correct);
    if (correct) {
      correctCount++;
    }

    if (isIndividualReward && correct) {
      const prevScore = player.get("score");
      player.set("score", prevScore + 1);
      player.round.set("rewarded", true);
    }
  });

  const yesGroup = yesCount > votedCount / 2;
  const groupVoteEmpty = votedCount === 0;
  const groupCorrect =
    !groupVoteEmpty && // Can only be correct if there were votes
    (correctCount === players.length / 2 // If half correct (and half incorrect)
      ? Random.choice(true, false) // Choose randomly if correct
      : correctCount > players.length / 2); // Otherwise correct if majority correct
  players.forEach(player => {
    player.round.set("groupCorrect", groupCorrect);
    player.round.set("groupVoteEmpty", groupVoteEmpty);
    player.round.set("yesGroup", yesGroup);
    player.round.set("playersNumber", players.length);
    if (!isIndividualReward && groupCorrect) {
      const prevScore = player.get("score");
      player.set("score", prevScore + 1);
      player.round.set("rewarded", true);
    }
  });
});

// onRoundEnd is triggered after each round.
// It receives the same options as onGameEnd, and the round that just ended.
Empirica.onRoundEnd((game, round, players) => {});

// onGameEnd is triggered when the game ends.
// It receives the same options as onGameStart.
Empirica.onGameEnd((game, players) => {});

// ===========================================================================
// => onSet, onAppend and onChanged ==========================================
// ===========================================================================

// onSet, onAppend and onChanged are called on every single update made by all
// players in each game, so they can rapidly become quite expensive and have
// the potential to slow down the app. Use wisely.
// It is very useful to be able to react to each update a user makes. Try
// nontheless to limit the amount of computations and database saves (.set)
// done in this callback. You can also try to limit the amount of calls to
// set() and append() you make (avoid calling them on a continuous drag of a
// slider for example) and inside the callbacks use the `key` argument at the
// very beginning of the callback to filter out which keys your need to run
// logic against.
// If you have not using these callbacks, comment them out so the system does
// not call them for nothing.

// // onSet is called when the experiment code call the .set() method
// // on games, rounds, stages, players, playerRounds or playerStages.
// onSet(
//   game,
//   round,
//   stage,
//   players,
//   player, // Player who made the change
//   target, // Object on which the change was made (eg. player.set() => player)
//   targetType, // Type of object on which the change was made (eg. player.set() => "player")
//   key, // Key of changed value (e.g. player.set("score", 1) => "score")
//   value, // New value
//   prevValue // Previous value
// ) {
//   // // Example filtering
//   // if (key !== "value") {
//   //   return;
//   // }
// },

// // onSet is called when the experiment code call the `.append()` method
// // on games, rounds, stages, players, playerRounds or playerStages.
// onAppend(
//   game,
//   round,
//   stage,
//   players,
//   player, // Player who made the change
//   target, // Object on which the change was made (eg. player.set() => player)
//   targetType, // Type of object on which the change was made (eg. player.set() => "player")
//   key, // Key of changed value (e.g. player.set("score", 1) => "score")
//   value, // New value
//   prevValue // Previous value
// ) {
//   // Note: `value` is the single last value (e.g 0.2), while `prevValue` will
//   //       be an array of the previsous valued (e.g. [0.3, 0.4, 0.65]).
// },

// onChange is called when the experiment code call the `.set()` or the
// `.append()` method on games, rounds, stages, players, playerRounds or
// playerStages.
// onChange(
//   game,
//   round,
//   stage,
//   players,
//   player, // Player who made the change
//   target, // Object on which the change was made (eg. player.set() => player)
//   targetType, // Type of object on which the change was made (eg. player.set() => "player")
//   key, // Key of changed value (e.g. player.set("score", 1) => "score")
//   value, // New value
//   prevValue, // Previous value
//   isAppend // True if the change was an append, false if it was a set
// ) {
//   // `onChange` is useful to run server-side logic for any user interaction.
//   // Note the extra isAppend boolean that will allow to differenciate sets and
//   // appends.
// }


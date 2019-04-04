import { withTracker } from "meteor/react-meteor-data";

import { Batches } from "../../api/batches/batches.js";
import { GameLobbies } from "../../api/game-lobbies/game-lobbies.js";
import { Games } from "../../api/games/games.js";
import Public from "../components/Public";
import { Conditions } from "../../api/conditions/conditions";

const withGameDependencies = withTracker(
  ({ loading, game, gameLobby, ...rest }) => {
    if (loading) {
      return { loading: true };
    }

    const gameId = game && game._id;
    const sub = Meteor.subscribe("gameDependencies", { gameId });
    const treatmentId =
      (game && game.treatmentId) || (gameLobby && gameLobby.treatmentId);
    const subTreatment = Meteor.subscribe("treatment", treatmentId);

    return {
      loading: !sub.ready() || !subTreatment.ready(),
      game,
      gameLobby,
      ...rest
    };
  }
)(Public);

export default withTracker(({ loading, player, playerId, ...rest }) => {
  if (loading) {
    return { loading: true };
  }
  // console.log(rest);

  const subBatches = Meteor.subscribe("runningBatches", { playerId });
  const subLobby = Meteor.subscribe("gameLobby", { playerId });
  const subGame = Meteor.subscribe("game", { playerId });
  const subDate = Meteor.subscribe("nextExpDate");
  
  loading = !subBatches.ready() || !subLobby.ready() || !subGame.ready() || !subDate.ready();

  // Are there non-full batches left
  const batchAvailable = Batches.find({ full: false }).count() > 0;

  // Current user's assigned game and lobby
  const gameLobby = GameLobbies.findOne({
    $or: [{ playerIds: playerId }, { queuedPlayerIds: playerId }]
  });
  const game = Games.findOne({ playerIds: playerId });
  const condition = Conditions.findOne({type: "nextExpDate"});

  let nextExpDate;
  if (condition) {
    nextExpDate = condition.value;
  }

  if (player && !game && !gameLobby) {
    return { loading: true };
  }
  // console.log({condition});

  // Check if playerId parameter is required, make sure it's present.
  const { playerIdParam, playerIdParamExclusive } = Meteor.settings.public;
  const playerIdParamRequired = playerIdParam && playerIdParamExclusive;
  const urlParams = new window.URL(document.location).searchParams;
  const playerIdParamPresent = urlParams.get(playerIdParam);
  const playerIdParamOk = playerIdParamRequired ? playerIdParamPresent : true;

  // Only open if a batch is available and the playerIdParam configuration is
  // fulfilled, or a game lobby, or a game assigned.
  const renderPublic = (batchAvailable && playerIdParamOk) || gameLobby || game;
  // const nextDate = Conditions.find({ "nextExpDate": {nextExpDate}})

  return {
    nextExpDate,
    batchAvailable,
    renderPublic,
    loading,
    player,
    gameLobby,
    game,
    ...rest
  };
})(withGameDependencies);

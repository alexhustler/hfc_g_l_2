import { Batches } from "../batches";
import { GameLobbies } from "../../game-lobbies/game-lobbies";
import { Games } from "../../games/games";
import { Players } from "../../players/players";
import { Conditions } from "../../conditions/conditions";

Meteor.publish("admin-batches", function() {
  if (!this.userId) {
    return null;
  }

  return [Batches.find()];
});

Meteor.publish("runningBatches", function({ playerId }) {
  return Batches.find(
    { status: "running", full: false },
    { fields: { _id: 1, full: 1 } }
  );
});

Meteor.publish("nextExpDate", function() {
  return Conditions.find();
});

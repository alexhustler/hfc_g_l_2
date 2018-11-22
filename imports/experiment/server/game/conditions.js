import SimpleSchema from "simpl-schema";

export const conditions = {
  playerCount: {
    description: "The Number of players participating in the given game",
    type: SimpleSchema.Integer,	
    min: 1,
    //allowedValues: [1, 3, 5, 9]
  },
  reward: {
    description: "Reward system type",
    type: String,
    allowedValues: ["individual", "group"]
  }
};

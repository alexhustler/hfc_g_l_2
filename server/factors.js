export let Factors = [{
    name: "playerCount",
    description: "The Number of players participating in the given game.",
    type: "Integer",
    min: 1,
    required: true
    },{
    name: "reward",
    description: "Reward system type.",
    type: String,
    allowedValues: ["individual", "group"],
    required: true
  }];

// config contains the client side configuration for this game. It is used by
// Empirica core to initialize and run the game.
import Consent from "./intro/Consent.jsx";
import ExitSurvey from "./outro/ExitSurvey.jsx";
import InstructionStepFour from "./intro/InstructionStepFour.jsx";
import InstructionStepOne from "./intro/InstructionStepOne.jsx";
import InstructionStepThree from "./intro/InstructionStepThree.jsx";
import InstructionStepTwo from "./intro/InstructionStepTwo.jsx";
import InstructionStepFive from "./intro/InstructionStepFive.jsx";
import Round from "./game/Round.jsx";
import Thanks from "./outro/Thanks.jsx";
import Sorry from "./outro/Sorry.jsx";

export const config = {
  RoundComponent: Round,
  ConsentComponent: Consent,

  // Introduction pages to show before they play the game.
  // At this point they have been assigned a treatment. You can return
  // different instruction steps depending on the assigned treatment.
  InstructionSteps(treatment) {
    return [
      InstructionStepOne,
      InstructionStepTwo,
      InstructionStepThree,
      InstructionStepFour,
      InstructionStepFive
    ];
  },

  // End of Game pages. These may vary depending on player or game information.
  // For example we can show the score of the user, or we can show them a
  // different message if they actually could not participate the game (timed
  // out), etc.
  // The last step will be the last page shown to user and will be shown to the
  // user if they come back to the website.
  // If you don't return anything, or do not define this function, a default
  // exit screen will be shown.
  ExitSteps(game, player) {
    if (player.exitStatus !== "finished") {
      return [Sorry];
    }
    return [ExitSurvey, Thanks];
  }
};

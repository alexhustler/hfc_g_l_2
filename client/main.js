import React from "react";
import { render } from "react-dom";

import Empirica from "meteor/empirica:core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// config contains the client side configuration for this game. It is used by
// Empirica core to initialize and run the game.
import Consent from "./intro/Consent.jsx";
import ExitSurvey from "./outro/ExitSurvey.jsx";
import InstructionStepFour from "./intro/InstructionStepFour.jsx";
import InstructionStepOne from "./intro/InstructionStepOne.jsx";
import InstructionStepThree from "./intro/InstructionStepThree.jsx";
import InstructionStepTwo from "./intro/InstructionStepTwo.jsx";
import InstructionStepFive from "./intro/InstructionStepFive.jsx";
import InstructionStepSix from "./intro/InstructionStepSix.jsx";
import Round from "./game/Round.jsx";
import Thanks from "./outro/Thanks.jsx";
import Sorry from "./outro/Sorry.jsx";


// Set the Consent Component you want to present players (optional).
Empirica.consent(Consent);

// Introduction pages to show before they play the game (optional).
// At this point they have been assigned a treatment. You can return
// different instruction steps depending on the assigned treatment.
Empirica.introSteps((game, treatment) => {
  return [
    InstructionStepOne,
    InstructionStepTwo,
    InstructionStepThree,
    InstructionStepFour,
    InstructionStepFive,
    InstructionStepSix
  ];
});

// The Round component containing the game UI logic.
// This is where you will be doing the most development.
// See client/game/Round.jsx to learn more.
Empirica.round(Round);

// End of Game pages. These may vary depending on player or game information.
// For example we can show the score of the user, or we can show them a
// different message if they actually could not participate the game (timed
// out), etc.
// The last step will be the last page shown to user and will be shown to the
// user if they come back to the website.
// If you don't return anything, or do not define this function, a default
// exit screen will be shown.
Empirica.exitSteps((game, player) => {
  return [ExitSurvey, Thanks];
});

// Start the app render tree.
// NB: This must be called after any other Empirica calls (Empirica.round(),
// Empirica.introSteps(), ...).
// It is required and usually does not need changing.
const reduxProvider =
  <Provider store={store}>
    <BrowserRouter>
      {Empirica.routes()}
    </BrowserRouter>
  </Provider>

Meteor.startup(() => {
  render(reduxProvider, document.getElementById("app"));
});
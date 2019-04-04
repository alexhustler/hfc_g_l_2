import React from "react";
import moment from "moment";

import Centered from "../../../core/ui/components/Centered.jsx";
import Tweet from "../game/Tweet.jsx";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent">
          <h1> Consent Form </h1>
          <p>
            This HIT is part of a MIT scientific research project. Your decision to complete this HIT is voluntary. The only information we will have, in addition to your responses, is the time at which you completed the survey. The results of the research may be presented at scientific meetings or published in scientific journals. You can withdraw at any time without being penalised. Furthermore, you can ask your data to be deleted at any time, by contacting the principal investigator (irahwan@mit.edu) or one of his collaborators. Clicking on the 'SUBMIT' button on the bottom of this page indicates that you are at least 18 years of age and agree to complete this HIT voluntarily.
          </p>
          <button
            type="button"
            className="pt-button pt-intent-success pt-icon-tick"
            onClick={this.props.onConsent}
          >
            AGREE
          </button>
        </div>
      </Centered>
    );
  }
}

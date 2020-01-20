import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions </h1>
          <p>
            <img
              src="/experiment/welcome-screen1.png"
              // alt="Example tweets"
              width="200"
            />
          </p>
          <p>Welcome Special Agent!</p>
          <p>
          And thank you for participating in this mission. In the following hour,
          you and your team will be transported to another planet, called Mecha-T.
          There, you will be asked to be neutral observers of the planet’s political situation.
          </p>
          <p>
          We will ask you to forecast future Mecha-T’s geo-political events - like wars,
          elections and migrations - based on information collected from Mecha-T’s news agencies.
          </p>
          <p>
            For each forecast:
            <ul>
              <li>Choose one of two available news agencies.</li>
              <li>Read what the selected news has to say about the event in question.</li>
              <li>Rate on a scale from 0% to 100% the probability that the event will happen.</li>
              <li>Maximize your tokens (they will be converted into real money at the end).</li>
            </ul>
          </p>
          <button
            type="button"
            className="pt-button pt-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="pt-icon-standard pt-icon-double-chevron-right pt-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}

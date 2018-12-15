import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepFour extends React.Component {
  render() {
    const { treatment, hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions (continued 4) </h1>
          <p>At the end of each forecast, we will give you three pieces of feedback:</p>
          <ul>
            <li>The agency that you selected.</li>
            <li>Your forecast [Yes/No].</li>
            <li>Your team’s most popular forecast [Yes/No].</li>
            <li>Your individual forecast accuracy [Correct/Incorrect].</li>
          </ul>
          <p>Use the feedback to make better forecasts!</p>
          <p>Ready? Landing has started. Good luck!</p>
          <button
            type="button"
            className="pt-button pt-intent-nope pt-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>{" "}
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

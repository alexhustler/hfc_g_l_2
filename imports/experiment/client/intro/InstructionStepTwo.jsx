import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepTwo extends React.Component {
  render() {
    const { treatment, hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions (continued 2) </h1>
          <p> For example, if the forecast is “Will it rain tomorrow?”, you might see something like this:</p>
          <p>
            <img
              src="/experiment/instr1.png"
              alt="Example tweets"
              width="700"
            />
          </p>
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

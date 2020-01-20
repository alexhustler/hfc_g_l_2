import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepThree extends React.Component {
  render() {
    const { treatment, hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
        <h1> Instructions (continued 3) </h1>
            <p>
              <img
                src="/experiment/instr2.png"
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

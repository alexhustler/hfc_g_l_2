import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepFive extends React.Component {
  render() {
    const { treatment, hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions (continued 5) </h1>
          {treatment.reward !== "group" ? (
            <>
            <p>
                <img
                  src="/experiment/instr4_ind.png"
                  alt="Example tweets"
                  width="700"
                />
            </p>
            <p> If your prediction is correct, collect your reward! </p>

            </>
          ) : (
            <>
            <p>
              <img
                src="/experiment/instr4_group.png"
                alt="Example tweets"
                width="700"
              />
            </p>
            <p> If your team’s collective prediction is correct, collect your reward! </p>

            </>
          )}
          <p>Notice that you will express your personal prediction, but your reward will depend on the team collective prediction,
              which will be made by majority rule and may be different from your own prediction.</p>
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

import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepFive extends React.Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
        return (
          <Centered>
            <div className="instructions">
              <h1> Disclaimer </h1>
              <p>
                All names, characters, and events portrayed in this experiment are
                fictitious. No identification with actual persons (living or
                deceased), places, events, and products is intended or should be
                inferred. All information, claims, quotes and statements reported in
                this experiment are purely intended for academic research and do not
                pertain real persons or events.
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
                // disabled={!hasNext}
              >
                Next
                <span className="pt-icon-standard pt-icon-double-chevron-right pt-align-right" />
              </button>
            </div>
          </Centered>
        );
    }
}

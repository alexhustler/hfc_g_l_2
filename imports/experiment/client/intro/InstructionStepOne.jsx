import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions </h1>
          <p>Hi!</p>
          <p>
            And thank you for participating in this experiment. In the following
            hour, we will bring you to a fictional world that looks very similar
            to ours.
          </p>
          <p>
            You will see a series of statements - presented as tweets - made by
            fictional news agencies regarding realistic events of global
            relevance. After having read the information provided, you will be
            asked to rate on a scale from 0% to 100% the probability that a
            certain event will happen. For example, if the question is “Will it
            rain tomorrow in NYC?”, you could see the following two tweets:
          </p>
          <p>
            <img
              src="/experiment/example-tweets.png"
              alt="Example tweets"
              width="700"
            />
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

import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepTwo extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions (continued) </h1>
          <p>
            You are now asked to rate the chances that it will rain tomorrow on
            a scale from 0% (“It definitely will not.”) to 100% (“It definitely
            will.”).
          </p>
          <p>
            <img
              src="/experiment/slider.png"
              alt="Example tweets"
              width="400"
            />
          </p>
          <p>Rules:</p>
          <ul>
            <li>Expressing a 50-50 chance is not allowed.</li>
            <li>
              If you are unsure, please bring the slider closer to the middle
              (but not 50-50!).
            </li>
            <li>
              If you are confident that the event in question will <strong>NOT happen</strong>,
              bring the slider to 0%.
            </li>
            <li>
              If on the contrary you are confident that it <strong>WILL happen</strong>, bring
              the slider to 100%.
            </li>
            <li>
              Any other response in between is also allowed (but not 50-50!).
            </li>
          </ul>
          <p>
            After entering your response, we will take the outcome that you
            think it’s most likely (e.g. <strong>“YES”</strong> it will rain) and compare it to the
            actual outcome that we obtain by fast-forwarding time in this
            fictional world (e.g. <strong>“YES”</strong> It’s raining!).
          </p>
          <p>
            <img
              src="/experiment/feedback.png"
              alt="Example tweets"
              width="400"
            />
          </p>
          <p>
            <strong>USE THE FEEDBACK TO LEARN HOW TO MAXIMIZE YOUR SCORE</strong>
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

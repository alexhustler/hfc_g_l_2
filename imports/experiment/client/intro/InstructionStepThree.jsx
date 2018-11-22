import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class InstructionStepThree extends React.Component {
  render() {
    const { treatment, hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions (continued 2) </h1>
          <p>
            Although the questions that you will see are realistic - often
            involving known people and countries - please remember that this is
            a <strong>fictional</strong> world! Try not to use your prior
            knowledge on the topic but only the information provided by the
            fictional news agencies.
          </p>
          <p>
            Please try to be both <strong>accurate</strong> and{" "}
            <strong>calibrated</strong>:
            <ul>
              <li>
                <strong>Accurate</strong> means that the outcome you think most
                likely (even by a small margin) should always agree with the
                final true outcome .
              </li>
              <li>
                <strong>Calibrated</strong> means that you should not be
                overconfident or underconfident. Please just sincerely express
                your true confidence.
              </li>
            </ul>
          </p>
          {treatment.reward === "group" ? (
            <>
              <p>
                One more thing! You will do this task together with other fellow
                Turkers as a GROUP.
              </p>

              <ul>
                <li>
                  For every question that YOUR GROUP answers{" "}
                  <strong>accurately</strong> you will receive a token. Tokens
                  will be converted into a monetary bonus at the end of the
                  experiment. The group decision is simply the majority of your
                  group’s votes.
                </li>
                <li>
                  We will also reward the most <strong>calibrated</strong>{" "}
                  worker in your group with one extra dollar at the end of the
                  experiment. So please don’t be neither overconfident or
                  underconfident.
                </li>
              </ul>
            </>
          ) : (
            <>
              <p>
                One more thing! You will do this task together with other fellow
                Turkers.
              </p>

              <ul>
                <li>
                  However you will be rewarded for your individual performance
                  only. For every question that YOU individually answer{" "}
                  <strong>accurately</strong> you will receive a token. Tokens
                  will be converted into a monetary bonus at the end of the
                  experiment.
                </li>
                <li>
                  We will also reward the most <strong>calibrated</strong>{" "}
                  worker in your group with one extra dollar at the end of the
                  experiment. So please don’t be neither overconfident or
                  underconfident.
                </li>
                <li>
                  Keep an eye on the <strong>score counter</strong> on the lefthand side to know how many tokens you have accumulated.
                </li>
              </ul>
            </>
          )}
          <p>Ready? Let’s start!</p>
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

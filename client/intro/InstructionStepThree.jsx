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
          {/* {treatment.reward !== "group" ? (
            <>
              <ol>
                <li>If the forecast is “Will it rain tomorrow?”, you might see something like this:</li>
                <li>Click on one of two available news agencies:</li>
                  <p>
                    <img
                      src="/experiment/instr1.png"
                      alt="Example tweets"
                      width="700"
                    />
                  </p>
                <li>Read the chosen agency’s opinion:</li>
                  <p>
                    <img
                      src="/experiment/agency-opinion.png"
                      alt="Example tweets"
                      width="100"
                    />
                    The X-pert says: <strong>YES</strong>.
                  </p>
                <li>Rate the chances of rain on a scale from 0% (“It definitely will not.”) to 100% (“It definitely will.”).</li>
                  <p>
                    <img
                      src="/experiment/slider.png"
                      alt="Example tweets"
                      width="400"
                    />
                  </p>
                <li>If your individual prediction is correct, collect your reward!</li>
              </ol>
              <p>
                Notice that although you are arriving as a group, 
                you will be making your predictions independently of the others. 
                However, we will show you the most popular prediction among your team as well as your own prediction.
              </p>
            </>
          ) : (
            <>
              <ol>
                <li>Question: “Will it rain tomorrow?”</li>
                <li>Click on one of two available news agencies:</li>
                  <p>
                    <img
                      src="/experiment/example-tweets.png"
                      alt="Example tweets"
                      width="700"
                    />
                  </p>
                <li>Read the chosen agency’s opinion:</li>
                  <p>
                    <img
                      src="/experiment/agency-opinion.png"
                      alt="Example tweets"
                      width="100"
                    />
                    The X-pert says: <strong>YES</strong>.
                  </p>
                <li>Rate the chances of rain on a scale from 0% (“It definitely will not.”) to 100% (“It definitely will.”).</li>
                  <p>
                    <img
                      src="/experiment/slider.png"
                      alt="Example tweets"
                      width="400"
                    />
                  </p>
                <li>If your team’s collective prediction is correct, collect your reward!</li>
              </ol>
              <p>
                Notice that you will express your personal prediction, 
                but your reward will depend on the team collective prediction, 
                which will be made by majority rule and may be different from your own prediction.
              </p>
            </>
          )}
          {/* <p>
            You are now asked to rate the chances that it will rain tomorrow on
            a scale from 0% (“It definitely will not.”) to 100% (“It definitely
            will.”).
          </p> */}
          {/* <p>
            After entering your response, we will take the outcome that you
            think it’s most likely (e.g. <strong>“YES”</strong> it will rain) and compare it to the
            actual outcome that we obtain by fast-forwarding time in this
            fictional world (e.g. <strong>“YES”</strong> It’s raining!).
          </p> */}
          {/* <p>
            <img
              src="/experiment/feedback.png"
              alt="Example tweets"
              width="400"
            />
          </p>
          <p>
            <strong>USE THE FEEDBACK TO LEARN HOW TO MAXIMIZE YOUR SCORE</strong>
          </p> */}
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

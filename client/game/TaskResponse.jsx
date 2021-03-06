import React from "react";
import Slider from "meteor/empirica:slider";

export default class TaskResponse extends React.Component {
  handleChange = num => {
    const { player } = this.props;

    let value = Math.round(num);
    if (value === 50) {
      return;
    }
    player.round.set("value", value);
  };

  handleSubmit = event => {
    const { player } = this.props;
    event.preventDefault();
    player.stage.submit();
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="pt-callout pt-icon-automatic-updates">
          <h5>Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  renderSlider() {
    const { player } = this.props;
    const value = player.round.get("value");

    return (
      <div className={`pt-form-content ${value === undefined ? "empty" : ""}`}>
        <div className="sliderTags">
          <div className="sliderTagNo">
            <div>"Definitely NO"</div>
          </div>
          <div className="sliderTagYes">
            <div>"Definitely YES"</div>
          </div>
        </div>
        <Slider
          min={0}
          max={100}
          stepSize={1}
          labelStepSize={100}
          onChange={this.handleChange}
          renderLabel={num => `${num}%`}
          value={value}
          showTrackFill={false}
        />
      </div>
    );
  }

  render() {
    const { stage, round, player, feedbackTime, step } = this.props;
    if (step === "chooseSource" || stage.name === "feedback") {
      return null;
    }

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <div className="pt-form-group">{this.renderSlider()}</div>
          <div className="pt-form-group">
            { (player.round.get("value") || player.round.get("value") === 0) && <button type="submit" className="pt-button pt-icon-tick pt-large">
              Submit
            </button> }
          </div>
        </form>
      </div>
    );
  }
}

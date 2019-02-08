import React from "react";

export default class TaskQuestion extends React.Component {
  handleClick = (knowledge, e) => {
    const { player, stage } = this.props;
    e.preventDefault();
    player.round.set("knowledgeOfSubject", knowledge);
    player.stage.submit();
  };

  render() {
    const { game, stage, round, player } = this.props;

    if (stage.name !== "question") {
      return null;
    }

    return (
      <div className="task-feedback">
        <h2>How much did you know about this topic beforehand?</h2>

        <p>
          <button
            className="pt-button pt-large"
            type="button"
            onClick={this.handleClick.bind(this, "nothing")}
          >
            Nothing at all
          </button>{" "}
          <button
            className="pt-button pt-large"
            type="button"
            onClick={this.handleClick.bind(this, "some")}
          >
            A little bit
          </button>{" "}
          <button
            className="pt-button pt-large"
            type="button"
            onClick={this.handleClick.bind(this, "expert")}
          >
            I am an expert
          </button>
        </p>
      </div>
    );
  }
}

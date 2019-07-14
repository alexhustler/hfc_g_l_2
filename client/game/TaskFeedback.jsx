import React from "react";

export default class TaskFeedback extends React.Component {
  render() {
    const { game, stage, round, player, selectedImg } = this.props;

    if (stage.name !== "feedback") {
      return null;
    }

    const isIndividualReward = game.treatment["reward"] === "individual";
    const isCorrectAnswer = (isIndividualReward && player.round.get("correct"))
      || (!isIndividualReward && round.get("isGroupCorrect"));

    return (
      <div className="task-feedback">
        <table>
          <tbody>
            <tr>
              <th>You chose: </th>
              <td className="textBold">
                {selectedImg !== null ? <img className="imgChoice" src={selectedImg} /> : "-"}
              </td>
            </tr>
            <tr>
              <th>{isIndividualReward ? "You" : "Your group"} predicted: </th>
              <td className="textBold">
                {
                  isIndividualReward
                    ? player.round.get("yesOrNo") || "-"
                    : round.get("numVotes") === 0
                      ? "-"
                      : round.get("groupYesOrNo")
                }
              </td>
            </tr>
            <tr>
              <th>{isIndividualReward ? "You were: " : "Your group was: "} </th>
              <td className={isCorrectAnswer ? "correctAns" : "incorrectAns"}
              >{isCorrectAnswer ? "correct" : "incorrect"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

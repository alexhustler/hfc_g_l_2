import React from "react";

export default class TaskFeedback extends React.Component {
  render() {
    const { game, stage, round, player, selectedImg } = this.props;

    if (stage.name !== "feedback") {
      return null;
    }

    const isIndividualReward = game.treatment["reward"] === "individual";
    const ifp = round.get("ifp");
    let groupDesicion = false;

    return (
      <div className="task-feedback">
        <table>
          <tbody>
            <tr>
              <th>You chose: </th>
              <td>
                <img className="imgChoice" src={selectedImg} />
              </td>
            </tr>
            <tr>
              <th>Your group(/You) predicted: </th>
              <td className="textBold">
                {player.round.get("groupVoteEmpty")
                  ? "-" // No response given
                  : player.round.get("yesGroup")
                    ? "Yes"
                    : "No"}
                {player.round.get("groupVoteEmpty")
                  ? groupDesicion = !ifp.willHappen // No response given
                  : player.round.get("yesGroup")
                    ? groupDesicion = true
                    : groupDesicion = false}
              </td>
            </tr>
            <tr>
              <th>Your group(/You) was(/were): </th>
              <td className={(ifp.willHappen && groupDesicion) || (!ifp.willHappen && !groupDesicion) ? "correctAns" : "incorrectAns"}
              >{(ifp.willHappen && groupDesicion) || (!ifp.willHappen && !groupDesicion) ? "correct" : "incorrect"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

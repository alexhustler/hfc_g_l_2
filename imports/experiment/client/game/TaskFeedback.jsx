import React from "react";

export default class TaskFeedback extends React.Component {
  render() {
    const { game, stage, round, player } = this.props;

    if (stage.name !== "feedback") {
      return null;
    }

    const isIndividualReward = game.treatment["reward"] === "individual";
    const ifp = round.get("ifp");

    return (
      <div className="task-feedback">
        <table>
          <tbody>
            <tr>
              <th>Your vote</th>
              <td>
                {player.round.get("value") === undefined
                  ? "-" // No response given
                  : player.round.get("value") > 50
                    ? "Yes"
                    : "No"}
              </td>
            </tr>
            <tr>
              <th>Group consensus</th>
              <td>
                {player.round.get("value") === undefined
                  ? "-" // No response given
                  : player.round.get("value") > 50
                    ? "Yes"
                    : "No"}
              </td>
            </tr>
            <tr>
              <th>Outcome</th>
              <td>{ifp.willHappen ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import Task from "./Task.jsx";

export default class Round extends React.Component {
  state = { percentage: this.props.round.index / (this.props.player.get("roundsCount") / 100) }
  render() {
    const { round, stage, player, game } = this.props;

    const Filler = (props) => {
      return <div className="filler" style={{ width: `${props.percentage}%` }}/>
    }
    const ProgressBar = (props) => {
      return(
        <div className="progress-bar">
          <Filler percentage={props.percentage}/>
        </div>
      )
    }

    return (
      <div className="round">
        <div>
          <ProgressBar percentage={this.state.percentage}/>
        </div>
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task round={round} stage={stage} player={player} game={game} />
          {/* <SocialExposure stage={stage} player={player} game={game} /> */}
        </div>
      </div>
    );
  }
}

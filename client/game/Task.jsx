import React from "react";

import TaskFeedback from "./TaskFeedback.jsx";
// import TaskQuestion from "./TaskQuestion.jsx";
import TaskResponse from "./TaskResponse";
import TaskStimulus from "./TaskStimulus";

import { connect } from "react-redux";
import { hideImage, resetRound } from "../redux/actions/statesActions";

class Task extends React.Component {
  // state = { roundId: props.responseState.roundIndex };

  static getDerivedStateFromProps(props) {
    const { resetRound, round } = props;
    const { roundIndex } = props.responseState;
    
    if (round.index !== roundIndex) {
      // console.log("I'm reseting.", round.index, roundIndex);
      // reset the state when a new round begins
      resetRound();
      return {
        roundIndex: round.index
      };
    }
    // console.log("I'm not reseting.", round.index, roundIndex);
    return null;
  }

  render() {
    const { game, round, stage, player, hideImage } = this.props;
    const { step, showLeft, showRight, showLeftAdvice, showRightAdvice,
      showQuestion, selectedImg, roundIndex } = this.props.responseState;

    return (
      <div className="task">
        <TaskStimulus round={round} stage={stage} player={player} showQuestion={showQuestion}
          showLeft={showLeft} showRight={showRight} showLeftAdvice={showLeftAdvice}
          showRightAdvice={showRightAdvice} hideImage={hideImage} roundIndex={roundIndex}
        />
        <TaskResponse round={round} stage={stage} player={player} game={game} step={step} />
        {/* <TaskQuestion round={round} stage={stage} player={player} game={game} /> */}
        <TaskFeedback
          game={game}
          round={round}
          stage={stage}
          player={player}
          selectedImg={selectedImg}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  responseState: state.responseState
})

export default connect(mapStateToProps, { hideImage, resetRound })(Task);

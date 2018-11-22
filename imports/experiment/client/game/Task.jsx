import React from "react";

import TaskFeedback from "./TaskFeedback.jsx";
import TaskQuestion from "./TaskQuestion.jsx";
import TaskResponse from "./TaskResponse";
import TaskStimulus from "./TaskStimulus";

import { connect } from "react-redux";
import { hideImage, hideSlider, resetRound } from "../../../core/startup/client/redux/actions/statesActions";

class Task extends React.Component {
  state = { roundId: null };

  static getDerivedStateFromProps(props, state) {
    const { resetRound } = props;
    if (props.round._id !== state.roundId && props.stage.name === "response") {
      // reset the state when a new round begains
      resetRound();
      return {
        roundId: props.round._id
      };
    }
    return null;
  }

  render() {
    const { game, round, stage, player, hideImage, hideSlider, resetRound } = this.props;
    const { step, showLeft, showRight, showLeftAdvice, showRightAdvice,
      showQuestion, showSlider, selectedImg } = this.props.responseState;

    return (
      <div className="task">
        <TaskStimulus round={round} stage={stage} player={player} showQuestion={showQuestion}
          showLeft={showLeft} showRight={showRight} showLeftAdvice={showLeftAdvice}
          showRightAdvice={showRightAdvice}
          hideImage={hideImage}
        />
        <TaskResponse round={round} stage={stage} player={player} game={game} step={step}
          showSlider={showSlider} hideSlider={hideSlider} />
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

export default connect(mapStateToProps, { hideImage, hideSlider, resetRound })(Task);

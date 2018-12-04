import React from "react";
import moment from "moment";

import Tweet from "./Tweet.jsx";

export default class TaskStimulus extends React.Component {

  handleRightButtonClick = (imgHandle) => {
    const { stage, hideImage } = this.props;
    if(stage.name === "feedback")
    {
      return null;
    }
    const handleRight = {
      side: "right",
      showLeft: false,
      showRightAdvice: true,
      showQuestion: false,
      selectedImg: `https://avatars.io/twitter/${imgHandle.slice(1)}`
    }
    hideImage(handleRight);
  }

  handleLeftButtonClick = (imgHandle) => {
    const { stage, hideImage } = this.props;
    if(stage.name === "feedback")
    {
      return null;
    }
    const handleLeft = {
      side: "left",
      showRight: false,
      showLeftAdvice: true,
      showQuestion: false,
      selectedImg: `https://avatars.io/twitter/${imgHandle.slice(1)}`
    }
    hideImage(handleLeft);
  }

  render() {
    const { round, stage, player, showLeftAdvice, showRightAdvice, showLeft, showRight, showQuestion } = this.props;

    const ifp = round.get("ifp");

    const globalSource = player.get("globalSource");
    const localSource = player.get("localSource");
    const roundSignals = player.get("roundSignals")[round.index];
    const roundLeftSide = player.get("roundLeftSide")[round.index];
    const roundLocalAccurate = player.get("roundLocalAccurate")[round.index];

    let globalCueSignal;
    if (ifp.globalAccurate) {
      globalCueSignal = ifp.willHappen ? "pro" : "against";
    } else {
      globalCueSignal = !ifp.willHappen ? "pro" : "against";
    }
    // const globalCue = ifp.chosen[globalCueSignal];
    const globalCue =
      ifp[globalCueSignal][roundSignals.global[globalCueSignal]];

    let localCueSignal;
    if (roundLocalAccurate) {
      localCueSignal = ifp.willHappen ? "pro" : "against";
    } else {
      localCueSignal = !ifp.willHappen ? "pro" : "against";
    }
    const localCue = ifp[localCueSignal][roundSignals.local[localCueSignal]];

    const global = (
      <Tweet
        handle={`@${globalSource.handle}`}
        author={globalSource.name}
        text={globalCue.text}
        // timestamp={moment(globalCue.datetime)}
        // likes={globalCue.likes}
        rts={globalCue.rts}
        isGlobal
        cueSignal={globalCueSignal}
      />
    );
    const local = (
      <Tweet
        handle={`@${localSource.handle}`}
        author={localSource.name}
        text={localCue.text}
        // timestamp={moment(globalCue.datetime)}
        // likes={globalCue.likes}
        rts={globalCue.rts}
        cueSignal={localCueSignal}
      />
    );

    const left = roundLeftSide === "global" ? global : local;
    const right = roundLeftSide === "global" ? local : global;

    // const isDebug = Meteor.isDevelopment;

    return (
      <div className="task-stimulus">
        <h1>{ifp.question}</h1>

        {/* {isDebug ? (
          <p className="debug center">
            Outcome: {ifp.willHappen ? "Yes" : "No"}
          </p>
        ) : null} */}

        {
          showQuestion &&
          <div>
            <h2>Whose advice do you want?</h2>
          </div>
        }
        <div className="row center">
          {
            showLeft &&
            <div className="column" onClick={() => this.handleLeftButtonClick(left.props.handle)}>
              {left}
            </div>
          }
          {
            showRight &&
            <div className="column" onClick={() => this.handleRightButtonClick(right.props.handle)}>
              {right}
            </div>
          }
          <p className="text">
            {
              showLeftAdvice &&
              <div>{left.props.author} says:<br></br>"{left.props.text}"</div>
            }
            {
              showRightAdvice &&
              <div>{right.props.author} says:<br></br>"{right.props.text}"</div>
            }
          </p>
        </div>
      </div>
    );
  }
}

import React from "react";

import Tweet from "./Tweet.jsx";

export default class TaskStimulus extends React.Component {

  handleRightButtonClick = (imgHandle) => {
    const { stage, hideImage, round, player } = this.props;
    if(stage.name === "feedback")
    {
      return null;
    }
    player.round.set("sideSelected", "right");
    const handleRight = {
      side: "right",
      showLeft: false,
      showRightAdvice: true,
      showQuestion: false,
      selectedImg: `https://avatars.io/twitter/${imgHandle.slice(1)}`,
      roundIndex: round.index
    }
    hideImage(handleRight);
  }

  handleLeftButtonClick = (imgHandle) => {
    const { stage, hideImage, round, player } = this.props;
    if(stage.name === "feedback")
    {
      return null;
    }
    player.round.set("sideSelected", "left");
    const handleLeft = {
      side: "left",
      showRight: false,
      showLeftAdvice: true,
      showQuestion: false,
      selectedImg: `https://avatars.io/twitter/${imgHandle.slice(1)}`,
      roundIndex: round.index
    }
    hideImage(handleLeft);
  }

  render() {
    const { round, player, showLeftAdvice, showRightAdvice, showLeft, showRight, showQuestion } = this.props;

    const ifp = round.get("ifp");

    const globalSource = player.get("globalSource");
    const localSource = player.get("localSource");
    const roundLeftSide = player.get("roundLeftSide")[round.index];
    const roundLocalAccurate = player.get("roundLocalAccurate")[round.index];

    const yesCue = "yes";
    const noCue = "no";
    let globalCue;
    if (ifp.globalAccurate) {
      globalCue = ifp.willHappen ? yesCue : noCue;
    } else {
      globalCue = !ifp.willHappen ? yesCue : noCue;
    }

    let localCue;
    if (roundLocalAccurate) {
      localCue = ifp.willHappen ? yesCue : noCue;
    } else {
      localCue = !ifp.willHappen ? yesCue : noCue;
    }

    player.round.set('cueAgreement', roundLocalAccurate === ifp.globalAccurate);

    const global = (
      <Tweet
        handle={`@${globalSource.handle}`}
        author={globalSource.name}
        text={globalCue}
        isGlobal
      />
    );
    const local = (
      <Tweet
        handle={`@${localSource.handle}`}
        author={localSource.name}
        text={localCue}
        bump={true}
      />
    );

    const left = roundLeftSide === "global" ? global : local;
    const right = roundLeftSide === "global" ? local : global;

    return (
      <div className="task-stimulus">
        <h1>{ifp.question}</h1>
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
          <div className="text">
            {
              showLeftAdvice &&
              <div>{left.props.author} says:<br></br>"{left.props.text}."</div>
            }
            {
              showRightAdvice &&
              <div>{right.props.author} says:<br></br>"{right.props.text}."</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

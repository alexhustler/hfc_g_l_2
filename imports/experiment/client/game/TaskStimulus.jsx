import React from "react";
import moment from "moment";

import Tweet from "./Tweet.jsx";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;

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
        timestamp={moment(globalCue.datetime)}
        likes={globalCue.likes}
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
        timestamp={moment(globalCue.datetime)}
        likes={globalCue.likes}
        rts={globalCue.rts}
        cueSignal={localCueSignal}
      />
    );

    const left = roundLeftSide === "global" ? global : local;
    const right = roundLeftSide === "global" ? local : global;

    const isDebug = Meteor.isDevelopment;

    return (
      <div className="task-stimulus">
        <h1>{ifp.question}</h1>

        {isDebug ? (
          <p className="debug center">
            Outcome: {ifp.willHappen ? "Yes" : "No"}
          </p>
        ) : null}

        <div className="tweets">
          {left}
          {right}
        </div>
      </div>
    );
  }
}

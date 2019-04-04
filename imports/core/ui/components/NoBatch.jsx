import React from "react";
import { Conditions } from "../../api/conditions/conditions.js";

export default class NoBatch extends React.Component {
  render() {
    const { nextExpDate } = this.props;
    return (
      <div className="pt-non-ideal-state">
        <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
          {/* 
            Not sure what works best:
            - pt-icon-small-cross
            - pt-icon-ban-circle
            - pt-icon-error
            - pt-icon-disable
            - pt-icon-warning-sign
         */}
          <span className="pt-icon pt-icon-error" />
        </div>
        <h4 className="pt-non-ideal-state-title">No experiments available</h4>
        <div className="pt-non-ideal-state-description">
          There are currently no available experiement.<br/>
          <strong>Please come back for the next scheduled game on: {nextExpDate}.</strong>{" "}
        </div>
        {/* <div>
          <strong>Please come back for the next scheduled game on: {nextExpDate}.</strong>{" "}
        </div> */}
      </div>
    );
  }
}

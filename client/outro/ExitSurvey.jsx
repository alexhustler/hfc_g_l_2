import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = { age: "", gender: "", accurate: "", howManyPlayers: "", whichQue: "", feedback: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { age, gender, accurate, howManyPlayers, whichQue, feedback, education } = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Exit Survey </h1>
          <p>
            Thank you for your time! Before you submit your responses to the below questionnaire,
            please click on this link to confirm to Prolific that you completed the study: &nbsp;
            <a href="https://app.prolific.co/submissions/complete?cc=1F68B996" target="_blank">
              https://app.prolific.co/submissions/complete?cc=1F68B996
            </a>.
          </p>
          <p>
            If the link does not work, please use the following code when completing your submission: <b>1F68B996</b>.
          </p>
          <br />
          <p>
            Before you leave please answer the following questions for us.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <div>
                <label htmlFor="age">Age</label>
                <div>
                  <input
                    id="age"
                    type="number"
                    min="0"
                    max="150"
                    step="1"
                    dir="auto"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <div>
                  <input
                    id="gender"
                    type="text"
                    dir="auto"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div style={{marginTop: "20px"}}>
              <label>Highest Education Qualification:</label>
              <div style={{marginTop: "10px"}}>
                <Radio
                  selected={education}
                  name="education"
                  value="high-school"
                  label="High School"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="bachelor"
                  label="US Bachelor's Degree"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="master"
                  label="Master's or higher"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="other"
                  label="Other"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-line" style={{marginTop: "20px"}}>
              <div>
                <label htmlFor="accurate">
                  Which cue was more accurate?
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="accurate"
                    name="accurate"
                    value={accurate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-line" style={{marginTop: "20px"}}>
              <div>
                <label htmlFor="whichQue">Which cue did you use the most?</label>
                <div>
                  <textarea
                    dir="auto"
                    id="whichQue"
                    name="whichQue"
                    value={whichQue}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-line" style={{marginTop: "20px"}}>
              <div>
                <label htmlFor="howManyPlayers">
                  How many players do you think you were working with?
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="howManyPlayers"
                    name="howManyPlayers"
                    value={howManyPlayers}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-line" style={{marginTop: "20px"}}>
              <div>
                <label htmlFor="feedback">
                  Feedback, including problems you encountered.
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="feedback"
                    name="feedback"
                    value={feedback}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}

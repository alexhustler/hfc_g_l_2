import React from "react";

import { Button, FormGroup, HTMLSelect, Icon, Intent } from "@blueprintjs/core";

import { AdminPageHeader } from "./AdminHeading.jsx";

export default class AdminExport extends React.Component {
  state = { format: "CSV", exporting: false };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleExport = () => {
    document.location = `/admin/export.${this.state.format.toLowerCase()}`;
  };

  render() {
    const { format, exporting } = this.state;
    return (
      <div className="export">
        <AdminPageHeader>Export</AdminPageHeader>

        <p>
          The export function dumps all the app data as a CSV
          file.
        </p>

        <FormGroup>
          {/* <HTMLSelect
            id="format"
            name="format"
            value={format}
            options={["CSV", "JSON"]}
            onChange={this.handleChange}
          />{" "} */}
          <Button
            text="Export All"
            loading={exporting}
            intent={Intent.PRIMARY}
            onClick={this.handleExport}
          />
        </FormGroup>
      </div>
    );
  }
}

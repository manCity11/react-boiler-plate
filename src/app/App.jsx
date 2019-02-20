import React from "react";
import {Trans} from "@lingui/react";
import "./app.scss";

export class App extends React.Component {
  render() {
    return <div>
      <h1><Trans id="title"/></h1>
      <p><Trans id="welcome" values={{IS_VIP: true}}/></p>
    </div>;
  }
}

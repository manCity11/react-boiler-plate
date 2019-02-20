import React from "react";
import {Trans} from "@lingui/react";
import "./app.scss";

export class App extends React.Component {
  render() {
    return <h1><Trans id="title" /></h1>;
  }
};

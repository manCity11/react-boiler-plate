import React from "react";
import {Trans} from "@lingui/react";
import {PageComponent} from './commons/page-component/page.component.jsx';
import "./app.scss";

export class App extends React.Component {
  render() {
    return <PageComponent>
      <h1><Trans id="title" /></h1>
    </PageComponent>;
  }
};

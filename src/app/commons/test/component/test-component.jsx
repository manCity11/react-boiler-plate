import React from 'react';
import {TestService} from '../test.service';

export class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  componentDidMount() {
    TestService
      .fetchDummy()
      .then(result => {
        this.setState({message: result});
      });
  }

  render() {
    return this.state.message ? <div>{this.state.message}</div> : null;
  }
};

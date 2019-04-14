import React from "react";
import { connect } from "react-redux";
import { Trans } from "@lingui/react";

import { REDUCER_ACTIONS } from "../store/reducers";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
    this.click.bind(this);
  }

  click(action) {
    this.props.dispatch({ type: REDUCER_ACTIONS[action].name });
  }

  render() {
    return (
      <div>
        <h1>
          <Trans id="title" />
        </h1>
        <p>
          <Trans id="welcome" values={{ IS_VIP: true }} />
        </p>
        <div>
          amount: {this.props.amount}
          <button onClick={() => this.click(REDUCER_ACTIONS.INCREASE.name)}>
            +
          </button>
          <button onClick={() => this.click(REDUCER_ACTIONS.DECREASE.name)}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(Home);

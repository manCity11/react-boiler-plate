export const REDUCER_ACTIONS = {
  INCREASE: {
    name: "INCREASE",
    action: state => state.amount + 1
  },
  DECREASE: {
    name: "DECREASE",
    action: state => state.amount - 1
  }
};

export const actions = (state = { amount: 0 }, action = { type: "" }) => {
  if (_.get(REDUCER_ACTIONS[action.type], "name")) {
    return {
      ...state,
      amount: REDUCER_ACTIONS[action.type].action(state)
    };
  }

  return state;
};

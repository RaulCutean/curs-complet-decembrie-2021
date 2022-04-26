// {count: 0, type: "increment"}
import { ACTIONS } from "../consts";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.POWER:
      if (state.count === 0) {
        return state;
      }
      return { count: state.count ** 2 };
    case ACTIONS.RAD:
      if (state.count === 0) {
        return state;
      }
      return { count: state.count ** 0.5 };
    default:
      return state;
  }
}

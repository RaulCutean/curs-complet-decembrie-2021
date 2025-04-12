import React, { useReducer } from "react";
import { reducer } from "./reducers";
import { ACTIONS } from "./consts";

const initialState = { count: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function power() {
    dispatch({ type: ACTIONS.POWER });
  }

  function rad() {
    dispatch({ type: ACTIONS.RAD });
  }

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={power}>pow</button>
      <button onClick={rad}>rad</button>
    </div>
  );
}

export default App;

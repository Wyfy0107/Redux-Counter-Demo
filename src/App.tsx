import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";
import {
  counterDecreamentAction,
  counterIncreamentAction,
} from "./redux/actions";
import { AppState } from "./redux/types";
 function App() {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: AppState) => state.counterReducer.counter
  );
  return (
    <div style={{marginLeft:"20px"}}>
      <h4>Counter</h4>
      <button onClick={() => dispatch(counterIncreamentAction())}>
        Increase
      </button>
      <button onClick={() => dispatch(counterDecreamentAction())}>
        Decrease
      </button>
  <h6>{counter}</h6>
    </div>
  );
};

export default App;

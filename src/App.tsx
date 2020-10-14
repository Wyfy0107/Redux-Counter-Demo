import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./redux/store";
import { add, subtract, deliverInput } from "./redux/actions";
import "./App.css";

function App() {
  const count = useSelector((state: AppState) => state.first.count);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(add());
  };

  const subtractHandler = (num: number) => {
    dispatch(subtract(num));
  };

  const inputHandler = (input: string) => {
    const number = Number(input);
    dispatch(deliverInput(number));
  };

  return (
    <div className='App'>
      <h1>Count</h1>
      <p>{count}</p>
      <input type='text' onChange={e => inputHandler(e.target.value)} />

      <button onClick={addHandler}>Add</button>
      <button onClick={() => subtractHandler(5)}>Subtract</button>
    </div>
  );
}

export default App;

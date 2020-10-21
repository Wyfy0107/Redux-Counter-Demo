import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./redux/store";
import {
  add,
  subtract,
  deliverInput,
  fetchMovies,
  fetchData,
  deliverUserInputToReducer,
} from "./redux/actions";
import "./css/App.css";

const object = {
  name: "duy",
  name1: "gabriel",
  name2: "kaka",
};

function App() {
  const count = useSelector((state: AppState) => state.first.count);

  const [string, setString] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchData());
  }, [dispatch]);

  const addHandler = () => {
    dispatch(add());
  };

  const subtractHandler = (num: number) => {
    dispatch(subtract(num));
  };

  const inputHandler = (input: string) => {
    const number = Number(input);
  };

  return (
    <div className='App'>
      <input onChange={e => setString(e.target.value)} />
      <button
        onClick={() => {
          console.log("1");
          dispatch(deliverUserInputToReducer(string));
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;

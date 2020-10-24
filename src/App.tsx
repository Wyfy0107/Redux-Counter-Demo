import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";
import {
  counterDecreamentAction,
  counterIncreamentAction,
  inputReceivedAction,
  decreamentReceivedInput,
  increamentReceivedInput

} from "./redux/actions";
import { AppState } from "./redux/types";
 function App() {
  const dispatch = useDispatch();
  const {counter,input} = useSelector(
    (state: AppState) => state.counterReducer
  );
  const handleIncreament = () => {
    if(input > 0) {
      dispatch(increamentReceivedInput())
    }
    else {
      dispatch(counterIncreamentAction())
    }
  }
  const handleDecreament = () => {
    if(input > 0){
      dispatch(decreamentReceivedInput())
    }
    else{
      dispatch(counterDecreamentAction())
    }
  }
  return (
    <div style={{marginLeft:"20px"}}>
      <h4>Counter</h4>
      <input type="number" onChange={(e:any)=>dispatch(inputReceivedAction(e.target.value))} value={input}/>
      <button>Submit</button>
      <button onClick={handleIncreament}>
        Increase
      </button>
      <button onClick={handleDecreament}>
        Decrease
      </button>

  <h6>{counter}</h6>
    </div>
  );
};

export default App;

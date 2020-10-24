import { ActionsTypes, initialStateType } from './../types';


const initialCounterState:initialStateType = {
    counter : 0,
    input: 0,
}
export const counterReducer = (state=initialCounterState, action:ActionsTypes) => {
    switch(action.type){
        case "INCREAMENT_COUNT": 
        return {
            ...state,
            counter: state.counter + 1
        }
        case "DECREAMENT_COUNT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "GET_INPUT": 
        if("payload" in action){
            return{
                ...state,
                input: action.payload 
            }
        }
        case "DECREAMENT_INPUT": {
            return {
                ...state,
                counter: state.counter - Number(state.input)
            }
        }
        case "INCREAMENT_INPUT":{
            return {
                ...state,
                counter: state.counter + Number(state.input)
            }
        }
        
        default: return state
    }
}
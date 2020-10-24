import { ActionsTypes, initialStateType } from './../types';


const initialCounterState:initialStateType = {
    counter : 0
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
        default: return state
    }
}
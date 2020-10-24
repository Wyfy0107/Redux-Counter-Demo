import { ActionsTypes } from './../types';
//**All actions stay here*/
//**Actions types will also be in the types.ts file */


// actions
export const counterIncreamentAction = ():ActionsTypes => {
    return{
        type:"INCREAMENT_COUNT"
    }
}
export const counterDecreamentAction = ():ActionsTypes => {
    return{
        type:"DECREAMENT_COUNT"
    }
}
export const inputReceivedAction = (input:number):any => {
        return{
            type:"GET_INPUT",
            payload:input
        } 
}
export const decreamentReceivedInput = ():ActionsTypes => {
    return{
        type:"DECREAMENT_INPUT"
    }
}
export const increamentReceivedInput = ():ActionsTypes => {
    return{
        type:"INCREAMENT_INPUT"
    }
}
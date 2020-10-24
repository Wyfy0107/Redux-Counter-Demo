
// This type always is used in either store or in component when 
// the actions is dispatch from component, right?
export type AppState = {
    counterReducer:{
        counter:number,
        input: number
      }
}

// this types always goes to reducer, right???
export type initialStateType = {
    counter:number,
    input:number
}

// this is the types of actions which only have type propery, 
// there is no payload property, because when we are firing the action which has this typesAction 
// doesn't take any arguments
export type CounterIncreamentTypes = {
    type: string
}
export type CounterDecreamentTypes = {
    type: string
}


// this action is for the input
export type InputActionTypes = {
    type:string,
    payload:number
}
 

// this is the combined actions types
export type ActionsTypes = | CounterIncreamentTypes | CounterDecreamentTypes |InputActionTypes
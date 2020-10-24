export type AppState = {
    counterReducer:{
        counter:number
      }
}
export type initialStateType = {
    counter:number
}
export type CounterIncreamentTypes = {
    type: string
}
export type CounterDecreamentTypes = {
    type: string
}
export type ActionsTypes = & CounterIncreamentTypes & CounterDecreamentTypes
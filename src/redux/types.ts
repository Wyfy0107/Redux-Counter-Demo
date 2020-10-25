export type AppState = {
  counter: CounterState
}
export type CounterState = {
  count: number
}

type addActionTypes = {
  type: string
}

type minusActionTypes = {
  type: string
}
export type ActionTypes = addActionTypes | minusActionTypes
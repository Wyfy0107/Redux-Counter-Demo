export type AppState = {
  counter: CounterState
}
export type CounterState = {
  count: number
}

type addActionTypes = {
  type: string
}

export type ActionTypes = addActionTypes
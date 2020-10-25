// Start with the Application's state
export type AppState = {
  counter: CounterState
}
export type CounterState = {
  count: number
  input: number
}


// Declare each action types
type addActionTypes = {
  type: string
}

type minusActionTypes = {
  type: string
}

type inputChangeAction = {
  type: string
  payload: number
}

// export all action types as ActionTypes
export type ActionTypes = addActionTypes | minusActionTypes | inputChangeAction
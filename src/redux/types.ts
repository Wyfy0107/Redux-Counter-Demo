// Start with the Application's state
export type AppState = {
  counter: CounterState
}
export type CounterState = {
  count: number
  input: number
  increaseBy: number
  decreaseBy: number
}


// Declare each action types
type addActionType = {
  type: string
}

type minusActionType = {
  type: string
}

type inputChangeActionType = {
  type: string
  payload: number
}

type multiplyActionType = {
  type: string
  payload: number
}

type selectedNumberType = {
  type: string,
  payload: number
}

// export all action types as ActionTypes
export type ActionTypes = addActionType | minusActionType | inputChangeActionType | multiplyActionType | selectedNumberType
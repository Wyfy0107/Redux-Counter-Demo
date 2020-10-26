//**All actions stay here*/
//**Actions types will also be in the types.ts file */

import { ADD, MINUS, HANDLE_INPUT, MULTIPLY, INCREASE_BY, DECREASE_BY } from './../constants/index';
import { ActionTypes } from "../types";

export const addAction = (): ActionTypes => {
  return { 
    type: ADD
  }
}

export const minusAction = (): ActionTypes => {
  return {
    type: MINUS
  }
}

export const handleInputChange = (input: number): ActionTypes => {
  return {
    type: HANDLE_INPUT,
    payload: input
  }
}

export const multiplyAction = (input: number): ActionTypes => {
  return {
    type: MULTIPLY,
    payload: input
  }
}

export const handleIncreaseBy = (input: number): ActionTypes => {
  return {
    type: INCREASE_BY,
    payload: input
  }
}

export const handleDecreaseBy = (input: number): ActionTypes => {
  return {
    type: DECREASE_BY,
    payload: input
  }
}
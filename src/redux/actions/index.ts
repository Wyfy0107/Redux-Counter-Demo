//**All actions stay here*/
//**Actions types will also be in the types.ts file */

import { ADD, MINUS } from './../constants/index';
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
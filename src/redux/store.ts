import { createStore } from "redux";

import createRootReducer from "./index";

export type AppState = {
  first: {
    count: number;
    input: number;
  };
  second: {
    name: string;
  };
};

const appState: AppState = {
  first: {
    count: 0,
    input: 0,
  },
  second: {
    name: "",
  },
};

const store = createStore(createRootReducer(), appState);

export default store;

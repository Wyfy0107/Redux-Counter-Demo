import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers";
import rootSaga from "./redux-saga";

export type AppState = {
  first: {
    count: number;
    input: number;
    moviesList: Movie[];
  };
  second: {
    name: string;
    movies: string[];
    input: string;
    dog: {
      message: string;
      status: string;
    };
  };
};

type Movie = {
  _id: string;
  name: string;
  description: string;
  rating: number;
};

const appState: AppState = {
  first: {
    count: 0,
    input: 0,
    moviesList: [],
  },
  second: {
    name: "",
    movies: [""],
    input: "",
    dog: {
      message: "",
      status: "",
    },
  },
};

export default function makeStore(initialState = appState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    createRootReducer(),
    //@ts-ignore
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if ((module as any).hot) {
    (module as any).hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

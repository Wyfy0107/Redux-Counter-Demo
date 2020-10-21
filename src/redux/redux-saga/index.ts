import {
  fetchMoviesSuccess,
  deliverDataToReducer,
  postInputSuccess,
} from "./../actions";
import { put, takeLatest, select, all } from "redux-saga/effects";
import axios from "axios";
import { AppState } from "../store";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=9540313e90640b8a84e8c785fe514abe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3";

const getInput = (state: AppState) => state.second.input;

// function* fetchMoviesSaga() {
//   try {
//     const res = yield axios.get(url);
//     yield put(fetchMoviesSuccess(res.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* fetchSomething() {
//   try {
//     const res = yield axios.get(url);
//     yield put(fetchMoviesSuccess(res.data.results));
//   } catch (error) {
//     console.log(error);
//   }
// }

function* fetchMoviesSaga() {
  try {
    const response = yield axios.get(url);
    yield put(deliverDataToReducer(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchDog() {
  try {
    yield console.log("3");
    const input = yield select(getInput);
    yield console.log(input);
    const res = yield axios.get(`https://dog.ceo/api/breeds/image/random`);
    yield console.log("4");
    yield put(postInputSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

const sagaWatcher = [
  takeLatest("FETCH_FETCH_FETCH", fetchMoviesSaga),
  // takeLatest("FETCH_SOMETHING", fetchSomething),
  takeLatest("DELIVER_INPUT", fetchDog),
];

export default function* rootSaga() {
  yield all([...sagaWatcher]);
}

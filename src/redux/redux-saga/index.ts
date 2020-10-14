import { fetchMoviesSuccess } from "./../actions";
import { put, takeLatest, select, all } from "redux-saga/effects";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=9540313e90640b8a84e8c785fe514abe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3";

function* fetchMoviesSaga() {
  try {
    const res = yield axios.get(url);
    yield put(fetchMoviesSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchSomething() {
  try {
    const res = yield axios.get(url);
    yield put(fetchMoviesSuccess(res.data.results));
  } catch (error) {
    console.log(error);
  }
}

const sagaWatcher = [
  takeLatest("FETCH_MOVIES", fetchMoviesSaga),
  takeLatest("FETCH_SOMETHING", fetchSomething),
];

export default function* rootSaga() {
  yield all([...sagaWatcher]);
}

import { all } from 'redux-saga/effects';
import dogSaga from './dog';

export default function* rootSaga() {
  yield all([...dogSaga]);
}

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { deliverImage } from '../actions';

function* fetchDog() {
  try {
    const result = yield axios.get('https://dog.ceo/api/breeds/image/random');
    yield put(deliverImage(result));
  } catch (error) {
    console.log(error);
  }
}

const sagaWatcher = [takeLatest('FETCH_ME_SOME_DOG', fetchDog)];

export default sagaWatcher;

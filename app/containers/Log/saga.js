import { put, takeLatest } from 'redux-saga/effects';

import {
  SAVE_MESSAGE,
} from './constants';

import {
  saveMessageAction,
} from './actions';

export function* saveMessageSaga(action) {
  try {
    if (action.params) {
      const payload = { message: action.params };
      yield put(saveMessageAction.success(payload));
    }
  } catch (error) {
    yield put(saveMessageAction.failure(error));
  }
}

export default function* saga() {
  yield takeLatest(SAVE_MESSAGE.REQUEST, saveMessageSaga);
}

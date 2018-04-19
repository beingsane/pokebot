import { put, takeLatest } from 'redux-saga/effects';

import {
  UPDATE_SPAMMER,
} from './constants';

import {
  updateSpammerAction,
} from './actions';

function sanitizeMessageList(messageListString) {
  return messageListString.split(',');
}

export function* updateSpammerSaga(action) {
  try {
    if (action.params) {
      const {
        channel,
        interval,
        messageListString,
      } = action.params;
      const payload = {
        channel,
        interval,
        messageListArray: sanitizeMessageList(messageListString),
        messageListString,
      };
      yield put(updateSpammerAction.success(payload));
    }
  } catch (error) {
    yield put(updateSpammerAction.failure(error));
  }
}

export default function* saga() {
  yield takeLatest(UPDATE_SPAMMER.REQUEST, updateSpammerSaga);
}

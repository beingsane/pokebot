import { put, takeLatest } from 'redux-saga/effects';

import {
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

import {
  updateCatcherAction,
  updateSpammerAction,
} from './actions';

function sanitizeWhitelist(whitelistString) {
  let sanitizedString = whitelistString.replace(/[^a-z0-9áéíóúñü .,_-]/gim, '');
  sanitizedString = sanitizedString.trim();
  return sanitizedString.split(',');
}

function sanitizeMessageList(messageListString) {
  return messageListString.split(',');
}

export function* updateCatcherSaga(action) {
  try {
    if (action.params) {
      const {
        delay,
        channelWhitelistString,
        ignoreChannelWhitelist,
        pokemonWhitelistString,
        ignorePokemonWhitelist,
      } = action.params;
      const payload = {
        delay,
        channelWhitelistArray: sanitizeWhitelist(channelWhitelistString),
        channelWhitelistString,
        ignoreChannelWhitelist,
        pokemonWhitelistArray: sanitizeWhitelist(pokemonWhitelistString),
        pokemonWhitelistString,
        ignorePokemonWhitelist,
      };
      yield put(updateCatcherAction.success(payload));
    }
  } catch (error) {
    yield put(updateCatcherAction.failure(error));
  }
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
  yield takeLatest(UPDATE_CATCHER.REQUEST, updateCatcherSaga);
  yield takeLatest(UPDATE_SPAMMER.REQUEST, updateSpammerSaga);
}

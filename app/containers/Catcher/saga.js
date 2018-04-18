import { put, takeLatest } from 'redux-saga/effects';

import {
  UPDATE_CATCHER,
} from './constants';

import {
  updateCatcherAction,
} from './actions';

function sanitizeWhitelist(whitelistString) {
  const sanitizedString = whitelistString.replace(/ /g, '');
  return sanitizedString.split(',');
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

export default function* saga() {
  yield takeLatest(UPDATE_CATCHER.REQUEST, updateCatcherSaga);
}

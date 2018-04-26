import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { client } from './discord';

import {
  LOGIN_DISCORD,
  LOGOUT_DISCORD,
  UPDATE_TOKEN,
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

import {
  loginDiscordAction,
  logoutDiscordAction,
  updateTokenAction,
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

export function* loginDiscordSaga(action) {
  try {
    if (action.params.token) {
      yield call([client, client.login], action.params.token);
      const payload = {
        token: action.params.token,
        isLoggedIn: true,
      };
      yield call([toast, toast.success], 'Successfully logged into Discord!');
      yield put(loginDiscordAction.success(payload));
    } else {
      yield call([toast, toast.error], 'Request to use token, but token was unavailable to the client.');
    }
  } catch (error) {
    yield call([toast, toast.error], error.message);
    yield put(loginDiscordAction.failure(error));
  }
}

export function* logoutDiscordSaga(action) {
  try {
    yield call([client, client.destroy]);
    const payload = { isLoggedIn: false };
    if (action.params.toast !== false) {
      yield call([toast, toast.success], 'Successfully logged out of Discord!');
    }
    yield put(logoutDiscordAction.success(payload));
  } catch (error) {
    yield call([toast, toast.error], error.message);
    yield put(logoutDiscordAction.failure(error));
  }
}

export function* updateTokenSaga(action) {
  try {
    const payload = { token: action.params.token };
    yield put(updateTokenAction.success(payload));
  } catch (error) {
    yield call([toast, toast.error], error.message);
    yield put(updateTokenAction.failure(error));
  }
}

export function* updateCatcherSaga(action) {
  try {
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
  } catch (error) {
    yield call([toast, toast.error], error.message);
    yield put(updateCatcherAction.failure(error));
  }
}

export function* updateSpammerSaga(action) {
  try {
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
  } catch (error) {
    yield call([toast, toast.error], error.message);
    yield put(updateSpammerAction.failure(error));
  }
}

export default function* saga() {
  yield takeLatest(LOGIN_DISCORD.REQUEST, loginDiscordSaga);
  yield takeLatest(LOGOUT_DISCORD.REQUEST, logoutDiscordSaga);
  yield takeLatest(UPDATE_TOKEN.REQUEST, updateTokenSaga);
  yield takeLatest(UPDATE_CATCHER.REQUEST, updateCatcherSaga);
  yield takeLatest(UPDATE_SPAMMER.REQUEST, updateSpammerSaga);
}

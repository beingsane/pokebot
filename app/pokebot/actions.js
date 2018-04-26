import asyncActionCreators from 'utils/asyncActionCreators';

import {
  LOGIN_DISCORD,
  LOGOUT_DISCORD,
  UPDATE_TOKEN,
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

export const loginDiscordAction = asyncActionCreators(LOGIN_DISCORD);
export const logoutDiscordAction = asyncActionCreators(LOGOUT_DISCORD);

export const updateTokenAction = asyncActionCreators(UPDATE_TOKEN);
export const updateCatcherAction = asyncActionCreators(UPDATE_CATCHER);
export const updateSpammerAction = asyncActionCreators(UPDATE_SPAMMER);

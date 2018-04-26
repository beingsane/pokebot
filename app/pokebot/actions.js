import asyncActionCreators from 'utils/asyncActionCreators';

import {
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

export const updateCatcherAction = asyncActionCreators(UPDATE_CATCHER);
export const updateSpammerAction = asyncActionCreators(UPDATE_SPAMMER);

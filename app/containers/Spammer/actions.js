import asyncActionCreators from 'utils/asyncActionCreators';

import {
  UPDATE_SPAMMER,
} from './constants';

export const updateSpammerAction = asyncActionCreators(UPDATE_SPAMMER);

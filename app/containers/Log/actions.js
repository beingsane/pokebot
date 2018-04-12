import asyncActionCreators from 'utils/asyncActionCreators';

import {
  SAVE_MESSAGE,
} from './constants';

export const saveMessageAction = asyncActionCreators(SAVE_MESSAGE);

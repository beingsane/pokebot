import asyncActionCreators from 'utils/asyncActionCreators';

import {
  UPDATE_CATCHER,
} from './constants';

export const updateCatcherAction = asyncActionCreators(UPDATE_CATCHER);

import { fromJS } from 'immutable';

import {
  UPDATE_SPAMMER,
} from './constants';

export const initialState = fromJS({
  channel: '',
  interval: '',
  messageListArray: [],
  messageListString: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SPAMMER.SUCCESS:
      return state.merge(action.payload);
    default:
      return state;
  }
}

export default reducer;

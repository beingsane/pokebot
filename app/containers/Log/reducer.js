import { fromJS } from 'immutable';

import {
  SAVE_MESSAGE,
} from './constants';

export const initialState = fromJS({
  list: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MESSAGE.SUCCESS: {
      const list = state.get('list').toJS().concat(action.payload.message);
      if (list.length > 100) {
        list.shift();
      }
      return state.merge({ list });
    }
    default:
      return state;
  }
}

export default reducer;

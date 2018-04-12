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
      return state.merge({
        list: state.get('list').toJS().concat(action.payload.message),
      });
    }
    default:
      return state;
  }
}

export default reducer;

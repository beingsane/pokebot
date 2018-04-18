import { fromJS } from 'immutable';

import {
  UPDATE_CATCHER,
} from './constants';

export const initialState = fromJS({
  delay: '',
  channelWhitelistArray: [],
  channelWhitelistString: '',
  ignoreChannelWhitelist: false,
  pokemonWhitelistArray: [],
  pokemonWhitelistString: '',
  ignorePokemonWhitelist: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATCHER.SUCCESS:
      return state.merge(action.payload);
    default:
      return state;
  }
}

export default reducer;

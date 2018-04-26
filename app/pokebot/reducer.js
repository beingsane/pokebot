import { fromJS } from 'immutable';

import {
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

export const initialState = fromJS({
  spammer: {
    channel: '',
    interval: '',
    messageListArray: [],
    messageListString: '',
  },
  catcher: {
    delay: '',
    channelWhitelistArray: [],
    channelWhitelistString: '',
    ignoreChannelWhitelist: false,
    pokemonWhitelistArray: [],
    pokemonWhitelistString: '',
    ignorePokemonWhitelist: false,
  },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATCHER.SUCCESS:
      return state.merge({ catcher: action.payload });
    case UPDATE_SPAMMER.SUCCESS:
      return state.merge({ spammer: action.payload });
    default:
      return state;
  }
}

export default reducer;

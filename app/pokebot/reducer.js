import { fromJS } from 'immutable';

import {
  LOGIN_DISCORD,
  LOGOUT_DISCORD,
  UPDATE_TOKEN,
  UPDATE_CATCHER,
  UPDATE_SPAMMER,
} from './constants';

export const initialState = fromJS({
  token: '',
  isLoggedIn: false,
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
    case LOGIN_DISCORD.SUCCESS:
      return state.merge(action.payload);
    case LOGOUT_DISCORD.SUCCESS:
      return state.merge(action.payload);
    case UPDATE_TOKEN.SUCCESS:
      return state.merge(action.payload);
    case UPDATE_CATCHER.SUCCESS:
      return state.merge({ catcher: action.payload });
    case UPDATE_SPAMMER.SUCCESS:
      return state.merge({ spammer: action.payload });
    default:
      return state;
  }
}

export default reducer;

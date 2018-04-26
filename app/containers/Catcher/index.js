import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectDelay,
  selectChannelWhitelistArray,
  selectChannelWhitelistString,
  selectIgnoreChannelWhitelist,
  selectPokemonWhitelistArray,
  selectPokemonWhitelistString,
  selectIgnorePokemonWhitelist,
  selectChannel,
} from 'pokebot/selectors';

import { updateCatcherAction } from 'pokebot/actions';
import { saveMessageAction } from 'containers/Log/actions';

import Container from './container';

const mapStateToProps = createStructuredSelector({
  delay: selectDelay(),
  channelWhitelistArray: selectChannelWhitelistArray(),
  channelWhitelistString: selectChannelWhitelistString(),
  ignoreChannelWhitelist: selectIgnoreChannelWhitelist(),
  pokemonWhitelistArray: selectPokemonWhitelistArray(),
  pokemonWhitelistString: selectPokemonWhitelistString(),
  ignorePokemonWhitelist: selectIgnorePokemonWhitelist(),
  spammerChannel: selectChannel(),
});

export const mapDispatchToProps = (dispatch) => ({
  saveMessage: (params) => dispatch(saveMessageAction.request(params)),
  updateCatcher: (params) => dispatch(updateCatcherAction.request(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

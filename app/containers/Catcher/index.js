import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'pokebot/reducer';
import saga from 'pokebot/saga';

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

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'pokebot', reducer });
const withSaga = injectSaga({ key: 'pokebot', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { saveMessageAction } from 'containers/Log/actions';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Container from './container';

import {
  selectDelay,
  selectChannelWhitelistArray,
  selectChannelWhitelistString,
  selectIgnoreChannelWhitelist,
  selectPokemonWhitelistArray,
  selectPokemonWhitelistString,
  selectIgnorePokemonWhitelist,
} from './selectors';

import { updateCatcherAction } from './actions';

const mapStateToProps = createStructuredSelector({
  delay: selectDelay(),
  channelWhitelistArray: selectChannelWhitelistArray(),
  channelWhitelistString: selectChannelWhitelistString(),
  ignoreChannelWhitelist: selectIgnoreChannelWhitelist(),
  pokemonWhitelistArray: selectPokemonWhitelistArray(),
  pokemonWhitelistString: selectPokemonWhitelistString(),
  ignorePokemonWhitelist: selectIgnorePokemonWhitelist(),
});

export const mapDispatchToProps = (dispatch) => ({
  saveMessage: (params) => dispatch(saveMessageAction.request(params)),
  updateCatcher: (params) => dispatch(updateCatcherAction.request(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'catcher', reducer });
const withSaga = injectSaga({ key: 'catcher', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

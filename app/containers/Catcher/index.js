import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Container from './container';

import {
  selectDelay,
  selectChannelWhitelistString,
  selectIgnoreChannelWhitelist,
  selectPokemonWhitelistString,
  selectIgnorePokemonWhitelist,
} from './selectors';

import {
  updateCatcherAction,
} from './actions';

const mapStateToProps = createStructuredSelector({
  delay: selectDelay(),
  channelWhitelistString: selectChannelWhitelistString(),
  ignoreChannelWhitelist: selectIgnoreChannelWhitelist(),
  pokemonWhitelistString: selectPokemonWhitelistString(),
  ignorePokemonWhitelist: selectIgnorePokemonWhitelist(),
});

export const mapDispatchToProps = (dispatch) => ({
  updateCatcher: (params) => dispatch(updateCatcherAction.request(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'catcher', reducer });
const withSaga = injectSaga({ key: 'catcher', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

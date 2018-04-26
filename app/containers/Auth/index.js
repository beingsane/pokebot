import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'pokebot/reducer';
import saga from 'pokebot/saga';

import {
  selectToken,
  selectIsLoggedIn,
} from 'pokebot/selectors';

import {
  loginDiscordAction,
  logoutDiscordAction,
  updateTokenAction,
} from 'pokebot/actions';

import Container from './container';

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  isLoggedIn: selectIsLoggedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  loginDiscord: (params) => dispatch(loginDiscordAction.request(params)),
  logoutDiscord: (params) => dispatch(logoutDiscordAction.request(params)),
  updateToken: (params) => dispatch(updateTokenAction.request(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'pokebot', reducer });
const withSaga = injectSaga({ key: 'pokebot', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

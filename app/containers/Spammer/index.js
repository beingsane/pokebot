import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'pokebot/reducer';
import saga from 'pokebot/saga';

import {
  selectChannel,
  selectInterval,
  selectMessageListArray,
  selectMessageListString,
} from 'pokebot/selectors';

import { updateSpammerAction } from 'pokebot/actions';

import Container from './container';

const mapStateToProps = createStructuredSelector({
  channel: selectChannel(),
  interval: selectInterval(),
  messageListArray: selectMessageListArray(),
  messageListString: selectMessageListString(),
});

export const mapDispatchToProps = (dispatch) => ({
  updateSpammer: (params) => dispatch(updateSpammerAction.request(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'pokebot', reducer });
const withSaga = injectSaga({ key: 'pokebot', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

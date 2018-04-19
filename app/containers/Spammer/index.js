import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Container from './container';

import { updateSpammerAction } from './actions';

import {
  selectChannel,
  selectInterval,
  selectMessageListArray,
  selectMessageListString,
} from './selectors';

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
const withReducer = injectReducer({ key: 'spammer', reducer });
const withSaga = injectSaga({ key: 'spammer', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

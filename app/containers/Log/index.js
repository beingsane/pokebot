import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Container from './container';

import { selectList } from './selectors';

import { saveMessageAction } from './actions';

const mapStateToProps = createStructuredSelector({
  list: selectList(),
});

export const mapDispatchToProps = (dispatch) => ({
  saveMessage: (params) => dispatch(saveMessageAction.request(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'log', reducer });
const withSaga = injectSaga({ key: 'log', saga });

export default compose(withReducer, withSaga, withConnect)(Container);

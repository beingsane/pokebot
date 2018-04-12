const asyncActionCreators = (asyncActions) => ({
  request: (params) => ({ type: asyncActions.REQUEST, params }),
  success: (payload) => ({ type: asyncActions.SUCCESS, payload }),
  failure: (error) => ({ type: asyncActions.FAILURE, error }),
});

export default asyncActionCreators;

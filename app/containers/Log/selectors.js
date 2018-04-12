import { createSelector } from 'reselect';

const selectState = (state) => state.get('log');

const selectList = () => createSelector(selectState, (state) => state.get('list').toJS());

export {
  selectState,
  selectList,
};

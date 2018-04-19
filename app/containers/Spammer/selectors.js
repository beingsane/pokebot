import { createSelector } from 'reselect';

const selectState = (state) => state.get('spammer');

const selectChannel = () => createSelector(selectState, (state) => state.get('channel'));

const selectInterval = () => createSelector(selectState, (state) => state.get('interval'));

const selectMessageListArray = () => createSelector(selectState, (state) => state.get('messageListArray').toJS());

const selectMessageListString = () => createSelector(selectState, (state) => state.get('messageListString'));

export {
  selectState,
  selectChannel,
  selectInterval,
  selectMessageListArray,
  selectMessageListString,
};

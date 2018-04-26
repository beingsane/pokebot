import { createSelector } from 'reselect';

const selectState = (state) => state.get('pokebot');

const selectCatcherState = (state) => state.getIn(['pokebot', 'catcher']);
const selectDelay = () => createSelector(selectCatcherState, (state) => state.get('delay'));
const selectChannelWhitelistArray = () => createSelector(selectCatcherState, (state) => state.get('channelWhitelistArray').toJS());
const selectChannelWhitelistString = () => createSelector(selectCatcherState, (state) => state.get('channelWhitelistString'));
const selectIgnoreChannelWhitelist = () => createSelector(selectCatcherState, (state) => state.get('ignoreChannelWhitelist'));
const selectPokemonWhitelistArray = () => createSelector(selectCatcherState, (state) => state.get('pokemonWhitelistArray').toJS());
const selectPokemonWhitelistString = () => createSelector(selectCatcherState, (state) => state.get('pokemonWhitelistString'));
const selectIgnorePokemonWhitelist = () => createSelector(selectCatcherState, (state) => state.get('ignorePokemonWhitelist'));

const selectSpammerState = (state) => state.getIn(['pokebot', 'spammer']);
const selectChannel = () => createSelector(selectSpammerState, (state) => state.get('channel'));
const selectInterval = () => createSelector(selectSpammerState, (state) => state.get('interval'));
const selectMessageListArray = () => createSelector(selectSpammerState, (state) => state.get('messageListArray').toJS());
const selectMessageListString = () => createSelector(selectSpammerState, (state) => state.get('messageListString'));

export {
  selectState,
  selectCatcherState,
  selectSpammerState,
  selectDelay,
  selectChannelWhitelistArray,
  selectChannelWhitelistString,
  selectIgnoreChannelWhitelist,
  selectPokemonWhitelistArray,
  selectPokemonWhitelistString,
  selectIgnorePokemonWhitelist,
  selectChannel,
  selectInterval,
  selectMessageListArray,
  selectMessageListString,
};

import { createSelector } from 'reselect';

const selectState = (state) => state.get('catcher');

const selectDelay = () => createSelector(selectState, (state) => state.get('delay'));

const selectChannelWhitelistArray = () => createSelector(selectState, (state) => state.get('channelWhitelistArray').toJS());

const selectChannelWhitelistString = () => createSelector(selectState, (state) => state.get('channelWhitelistString'));

const selectIgnoreChannelWhitelist = () => createSelector(selectState, (state) => state.get('ignoreChannelWhitelist'));

const selectPokemonWhitelistArray = () => createSelector(selectState, (state) => state.get('pokemonWhitelistArray').toJS());

const selectPokemonWhitelistString = () => createSelector(selectState, (state) => state.get('pokemonWhitelistString'));

const selectIgnorePokemonWhitelist = () => createSelector(selectState, (state) => state.get('ignorePokemonWhitelist'));

export {
  selectState,
  selectDelay,
  selectChannelWhitelistArray,
  selectChannelWhitelistString,
  selectIgnoreChannelWhitelist,
  selectPokemonWhitelistArray,
  selectPokemonWhitelistString,
  selectIgnorePokemonWhitelist,
};

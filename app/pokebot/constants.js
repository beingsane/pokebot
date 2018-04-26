import createRequestTypes from 'utils/createRequestTypes';
import pokemon from './pokemon.json';

export const POKECORD_USERID = '365975655608745985';
export const POKEMON_LIST = pokemon;

export const UPDATE_CATCHER = createRequestTypes('UPDATE_CATCHER');
export const UPDATE_SPAMMER = createRequestTypes('UPDATE_SPAMMER');

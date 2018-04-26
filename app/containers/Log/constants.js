import createRequestTypes from 'utils/createRequestTypes';

export const SAVE_MESSAGE = createRequestTypes('SAVE_MESSAGE');

export const MESSAGE_TYPE = {
  CAUGHT: 0,
  LEVELUP: 1,
  WILD: 2,
  USER: 3,
};

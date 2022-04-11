import { SELECT_REQUEST } from '../constants';

export const selectRequestAction = (payload) => ({
  type: SELECT_REQUEST,
  payload,
});

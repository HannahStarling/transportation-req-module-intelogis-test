import { CHANGE_POINT } from '../constants';

export const changeRequestAction = (payload) => ({
  type: CHANGE_POINT,
  payload,
});

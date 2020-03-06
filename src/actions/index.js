import * as actionTypes from '../utils/actionTypes';

export const onParamsChange = (params) => ({
  type: actionTypes.PARAMS_CHANGE,
  params
});

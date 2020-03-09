import * as actionTypes from '../utils/actionTypes';

export const onMockSirParamsChange = (params) => ({
  type: actionTypes.MOCK_SIR_PARAMS_CHANGE,
  params
});

export const onSeirParamsChange = (params) => ({
  type: actionTypes.SEIR_PARAMS_CHANGE,
  params
});

import * as actionTypes from '../utils/actionTypes';
import * as model from '../models/mockSir';

const initialState = {
  params: model.DEFAULT_PARAM,
  data: model.genData(),
};

const mockSir = (state = initialState, action) => {
  if (action.type === actionTypes.MOCK_SIR_PARAMS_CHANGE) {
    return {
      params: action.params,
      data: model.genData(action.params),
    };
  }
  return state;
};

export default mockSir;

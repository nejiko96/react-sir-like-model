import * as actionTypes from '../utils/actionTypes';
import * as model from '../models/sir';

const initialState = {
  params: model.DEFAULT_PARAM,
  data: model.genData(),
};

const sir = (state = initialState, action) => {
  if (action.type === actionTypes.SIR_PARAMS_CHANGE) {
    return {
      params: action.params,
      data: model.genData(action.params),
    };
  }
  return state;
};

export default sir;

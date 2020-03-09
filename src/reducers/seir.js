import * as actionTypes from '../utils/actionTypes';
import * as model from '../models/seir';

const initialState = {
  params: model.DEFAULT_PARAM,
  data: model.genData(),
};

const seir = (state = initialState, action) => {
  if (action.type === actionTypes.SEIR_PARAMS_CHANGE) {
    return {
      params: action.params,
      data: model.genData(action.params),
    };
  }
  return state;
};

export default seir;

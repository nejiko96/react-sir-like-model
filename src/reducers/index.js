import * as actionTypes from '../utils/actionTypes';
import * as model from '../models/proto'

const initialState = {
  params: model.DEFAULT_PARAM,
  chart: model.genChart(),
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.PARAMS_CHANGE) {
    return {
      params: action.params,
      chart: model.genChart(action.params)
    };
  } else {
    return state;
  }
};

export default reducer;

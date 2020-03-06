import * as actionTypes from '../utils/actionTypes';
import * as model from '../models/proto'

const initialState = {
  params: {
    population: 4,
    duration: 3,
    beta: 0.5,
  },
  chart: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.PARAMS_CHANGE) {
    return {
      ...state,
      chart: model.genChart(action.params)
    }
  }
};

export default reducer;

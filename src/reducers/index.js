import { combineReducers } from 'redux';
import mockSir from './mockSir';
import sir from './sir';
import seir from './seir';

const reducer = combineReducers({
  mockSir,
  sir,
  seir,
});

export default reducer;

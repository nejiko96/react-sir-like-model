import { combineReducers } from 'redux';
import mockSir from './mockSir';
import seir from './seir';

const reducer = combineReducers({
  mockSir,
  seir
});

export default reducer;

import { connect } from 'react-redux';
import { onSeirParamsChange } from '../actions';

import SeirPanel from '../components/SeirPanel';

const mapState = (state) => (state.seir);

const mapDispatch = (dispatch) => ({
  onParamsChange: (params) => dispatch(onSeirParamsChange(params)),
});

export default connect(
  mapState,
  mapDispatch,
)(SeirPanel);

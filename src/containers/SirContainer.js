import { connect } from 'react-redux';
import { onSirParamsChange } from '../actions';

import SirPanel from '../components/SirPanel';

const mapState = (state) => (state.sir);

const mapDispatch = (dispatch) => ({
  onParamsChange: (params) => dispatch(onSirParamsChange(params)),
});

export default connect(
  mapState,
  mapDispatch,
)(SirPanel);

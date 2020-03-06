import { connect } from 'react-redux';
import { onParamsChange } from '../actions';

import Settings from '../components/Settings';

const mapState = (state, ownProps) => ({
  params: state.params
});

const mapDispatch = {
  onParamsChange,
};

export default connect(
  mapState,
  mapDispatch
)(Settings)

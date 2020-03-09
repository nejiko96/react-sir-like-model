import { connect } from 'react-redux';
import { onMockSirParamsChange } from '../actions';

import MockSirPanel from '../components/MockSirPanel';

const mapState = (state, ownProps) => (state.mockSir);

const mapDispatch = dispatch => ({
  onParamsChange: (params) => dispatch(onMockSirParamsChange(params))
});

export default connect(
  mapState,
  mapDispatch
)(MockSirPanel);

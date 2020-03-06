import { connect } from 'react-redux';

import Chart from '../components/Chart';

const mapState = (state, ownProps) => ({
  params: state.params,
  chart: state.chart
});

export default connect(
  mapState
)(Chart)

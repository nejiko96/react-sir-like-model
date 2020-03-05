import { connect } from 'react-redux';
// import { onThemeChange, onLangChange, onSizeChange } from '../actions';

import Settings from '../components/Settings';

const mapDispatch = {
  // onThemeChange,
  // onLangChange,
  // onSizeChange
};

export default connect(
  null,
  mapDispatch
)(Settings)

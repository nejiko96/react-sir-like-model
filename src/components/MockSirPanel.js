import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MockSirSettings from '../components/MockSirSettings';
import MockSirChart from '../components/MockSirChart';

class MockSirPanel extends Component {
  render () {
    const { params, data, onParamsChange } = this.props;
    return (
      <fragment>
        <MockSirSettings
          params={params}
          onParamsChange={onParamsChange}
        />
        <MockSirChart
          params={params}
          data={data}
        />
      </fragment>
    );
  }
}

MockSirPanel.propTypes = {
  params: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default MockSirPanel;

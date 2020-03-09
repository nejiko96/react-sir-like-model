import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SeirSettings from '../components/SeirSettings';
import SeirChart from '../components/SeirChart';

class SeirPanel extends Component {
  render () {
    const { params, data, onParamsChange } = this.props;
    return (
      <fragment>
        <SeirSettings
          params={params}
          onParamsChange={onParamsChange}
        />
        <SeirChart
          params={params}
          data={data}
        />
      </fragment>
    );
  }
}

SeirPanel.propTypes = {
  params: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default SeirPanel;

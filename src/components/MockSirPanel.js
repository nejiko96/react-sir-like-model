import React from 'react';
import PropTypes from 'prop-types';

import MockSirSettings from './MockSirSettings';
import SirChart from './SirChart';

const MockSirPanel = ({ params, data, onParamsChange }) => (
  <>
    <MockSirSettings
      params={params}
      onParamsChange={onParamsChange}
    />
    <SirChart
      params={params}
      data={data}
    />
  </>
);

MockSirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default MockSirPanel;

import React from 'react';
import PropTypes from 'prop-types';

import SirSettings from './SirSettings';
import SirChart from './SirChart';

const SirPanel = ({ params, data, onParamsChange }) => (
  <>
    <SirSettings
      params={params}
      onParamsChange={onParamsChange}
    />
    <SirChart
      params={params}
      data={data}
    />
  </>
);

SirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default SirPanel;

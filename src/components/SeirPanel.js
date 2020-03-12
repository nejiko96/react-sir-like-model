import React from 'react';
import PropTypes from 'prop-types';

import SeirSettings from './SeirSettings';
import SeirChart from './SeirChart';

const SeirPanel = ({ params, data, onParamsChange }) => (
  <>
    <SeirSettings
      params={params}
      onParamsChange={onParamsChange}
    />
    <SeirChart
      params={params}
      data={data}
    />
  </>
);

SeirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default SeirPanel;

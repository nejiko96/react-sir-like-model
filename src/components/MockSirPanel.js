import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import MockSirSettings from './MockSirSettings';
import SirChart from './SirChart';

const MockSirPanel = ({ params, data, onParamsChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4">{t('mockSir.title')}</Typography>
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
};

MockSirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default MockSirPanel;

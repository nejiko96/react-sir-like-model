import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import SirSettings from './SirSettings';
import SirChart from './SirChart';

const SirPanel = ({ params, data, onParamsChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4">{t('sir.title')}</Typography>
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
};

SirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default SirPanel;

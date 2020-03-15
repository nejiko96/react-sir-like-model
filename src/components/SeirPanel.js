import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import SeirSettings from './SeirSettings';
import SeirChart from './SeirChart';

const SeirPanel = ({ params, data, onParamsChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4">{t('seir.title')}</Typography>
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
};

SeirPanel.propTypes = {
  params: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default SeirPanel;

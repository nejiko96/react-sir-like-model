import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend, Tooltip,
} from 'recharts';

const styles = () => ({
  root: {
    padding: 10,
  },
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
});

const getTick = (val, mag) => {
  if (mag <= 4) return val;
  if (val === 0) return val;
  mag = Math.floor(mag - 0.01);
  val /= 10 ** mag;
  return `${val}e${mag}`;
};

const MockSirChart = (props) => {
  const { classes, params, data } = props;
  return (
    <div className={classes.root}>
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={classes.margin}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray={[5, 5]} />
        <Area type="monotone" dataKey="infected" stackId="1" stroke="#ff7f58" fill="#ff7f58" />
        <Area type="monotone" dataKey="susceptable" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <XAxis dataKey="day" />
        <YAxis tickFormatter={(v) => getTick(v, params.population)} />
        <Legend />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

MockSirChart.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({
    population: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number.isRequired,
    infected: PropTypes.number.isRequired,
    susceptable: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
  })).isRequired,
};

export default withStyles(styles)(MockSirChart);

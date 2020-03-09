import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const styles = theme => ({
  root: {
    padding: 10
  },
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }
});

const getTick = (val, mag) => {
  if (mag <= 4) return val;
  if (val === 0) return val;
  mag = Math.floor(mag - 0.01);
  val /= Math.pow(10, mag);
  return `${val}e${mag}`;
};

class SeirChart extends Component {
  render () {
    const { classes, params, data } = this.props;
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
          <Area type="monotone" dataKey="exposed" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="susceptable" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="died" stackId="1" stroke="#cccccc" fill="#cccccc" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(v) => getTick(v, params.population)}/>
          <Legend />
          <Tooltip />
        </AreaChart>
      </div>
    );
  }
}

SeirChart.propTypes = {
  classes: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(SeirChart);

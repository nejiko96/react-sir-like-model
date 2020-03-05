import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const styles = theme => ({
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

class Chart extends Component {
  state = {
    data: [
      { day:  0, S: 10000, I:    0, R:    0 },
      { day:  1, S:  9999, I:    1, R:    0 },
      { day:  2, S:  9998, I:    2, R:    0 },
      { day:  3, S:  9996, I:    4, R:    0 },
      { day:  4, S:  9992, I:    7, R:    1 },
      { day:  5, S:  9985, I:   13, R:    2 },
      { day:  6, S:  9972, I:   24, R:    4 },
      { day:  7, S:  9948, I:   44, R:    8 },
      { day:  8, S:  9905, I:   80, R:   15 },
      { day:  9, S:  9825, I:  147, R:   28 },
      { day: 10, S:  9680, I:  268, R:   52 },
      { day: 11, S:  9421, I:  484, R:   95 },
      { day: 12, S:  8965, I:  860, R:  175 },
      { day: 13, S:  8194, I: 1486, R:  320 },
      { day: 14, S:  6976, I: 2444, R:  579 },
      { day: 15, S:  5271, I: 3694, R: 1035 },
      { day: 16, S:  3324, I: 4870, R: 1806 },
      { day: 17, S:  1705, I: 5271, R: 3024 },
      { day: 18, S:   806, I: 4465, R: 4729 },
      { day: 19, S:   446, I: 2878, R: 6676 },
      { day: 20, S:   318, I: 1387, R: 8295 },
      { day: 21, S:   274, I:  533, R: 9194 },
      { day: 22, S:   259, I:  187, R: 9554 },
      { day: 23, S:   254, I:   64, R: 9682 },
      { day: 24, S:   253, I:   21, R: 9726 },
      { day: 25, S:   252, I:    7, R: 9741 },
      { day: 26, S:   252, I:    2, R: 9746 },
      { day: 27, S:   252, I:    1, R: 9747 },
      { day: 28, S:   252, I:    0, R: 9748 },
    ],
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AreaChart
          width={800}
          height={400}
          data={this.state.data}
          margin={classes.margin}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="I" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="S" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="R" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <XAxis dataKey="day" />
          <YAxis />
          <Legend />
          <Tooltip />
        </AreaChart>
      </div>
    );
  }
}

export default withStyles(styles)(Chart);

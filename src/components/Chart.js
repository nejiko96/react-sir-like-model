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
  render() {
    const { classes, chart } = this.props;
    return (
      <div className={classes.root}>
        <AreaChart
          width={800}
          height={400}
          data={chart}
          margin={classes.margin}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="infected" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="susceptable" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
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

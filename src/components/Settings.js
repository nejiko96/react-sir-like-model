import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const styles = theme => ({
  root: {
    width: 400,
  },
});

class Settings extends Component {
  state = {
    population: 4,
    duration: 3,
    beta: 1.0,
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          人口
        </Typography>
        <Slider
          defaultValue={this.state.population}
          valueLabelFormat={(v) => `10^${v}`}
          aria-labelledby="population-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={8}
        />
        <Typography gutterBottom>
          感染させる能力が続く期間（日）
        </Typography>
        <Slider
          defaultValue={this.state.duration}
          aria-labelledby="duration-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={7}
        />
        <Typography gutterBottom>
          感染率（１人が１日に感染させる人数）
        </Typography>
        <Slider
          defaultValue={this.state.beta}
          aria-labelledby="beta-slider"
          valueLabelDisplay="auto"
          min={0}
          step={0.01}
          max={2}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Settings);

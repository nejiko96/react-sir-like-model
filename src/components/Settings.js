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
  render() {
    const { classes, params} = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          全体の人数
        </Typography>
        <Slider
          defaultValue={params.population}
          valueLabelFormat={(v) => `10^${v}`}
          aria-labelledby="population-slider"
          valueLabelDisplay="auto"
          min={1}
          step={0.1}
          max={10}
          onChange={this.handlePopulationChange}
        />
        <Typography gutterBottom>
          感染能力がある期間（日）
        </Typography>
        <Slider
          defaultValue={params.duration}
          aria-labelledby="duration-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={15}
          onChange={this.handleDurationChange}
        />
        <Typography gutterBottom>
          感染率（１日に１人から感染する人数）
        </Typography>
        <Slider
          defaultValue={params.beta}
          aria-labelledby="beta-slider"
          valueLabelDisplay="auto"
          min={0}
          step={0.01}
          max={2}
          onChange={this.handleBetaChange}
        />
      </div>
    );
  }

  handlePopulationChange = (_ev, population) => {
    this.props.onParamsChange({
      ...this.props.params,
      population
    });
  };

  handleDurationChange = (_ev, duration) => {
    this.props.onParamsChange({
      ...this.props.params,
      duration
    });
  };

  handleBetaChange = (_ev, beta) => {
    this.props.onParamsChange({
      ...this.props.params,
      beta
    });
  };
}

export default withStyles(styles)(Settings);

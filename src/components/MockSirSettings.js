import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const styles = theme => ({
  root: {
    width: 400,
    padding: 10,
  },
});

class MockSirSettings extends Component {
  state = {
    population: 4,
    duration: 3,
    beta: 0.5,
  };

  static getDerivedStateFromProps(props, state) {
    return props.params;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          人数
        </Typography>
        <Slider
          value={this.state.population}
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
          value={this.state.duration}
          aria-labelledby="duration-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={15}
          onChange={this.handleDurationChange}
        />
        <Typography gutterBottom>
          １日に１人から感染する人数
        </Typography>
        <Slider
          value={this.state.beta}
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
    this.setState({ population });
    this.props.onParamsChange({
      ...this.state,
      population
    });
  };

  handleDurationChange = (_ev, duration) => {
    this.setState({ duration });
    this.props.onParamsChange({
      ...this.state,
      duration
    });
  };

  handleBetaChange = (_ev, beta) => {
    this.setState({ beta });
    this.props.onParamsChange({
      ...this.state,
      beta
    });
  };
}

MockSirSettings.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({
    population: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    beta: PropTypes.number.isRequired,
  }).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(MockSirSettings);

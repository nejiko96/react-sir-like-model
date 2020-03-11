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

class SeirSettings extends Component {
  state = {
    population: 4,
    beta: 0.8,
    latentPeriod: 7,
    infectiousPeriod: 3,
    tau: 0.001,
  };

  static getDerivedStateFromProps(props, state) {
    return props.params;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          N：人数
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
          β：伝達係数
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
        <Typography gutterBottom>
          lp：潜伏期間
        </Typography>
        <Slider
          value={this.state.latentPeriod}
          aria-labelledby="latent-period-slider"
          valueLabelDisplay="auto"
          min={1}
          step={0.1}
          max={15}
          onChange={this.handleLatentPeriodChange}
        />

        <Typography gutterBottom>
          ip：感染期間
        </Typography>
        <Slider
          value={this.state.infectiousPeriod}
          aria-labelledby="infectious-period-slider"
          valueLabelDisplay="auto"
          min={1}
          step={0.1}
          max={15}
          onChange={this.handleInfectiousPeriodChange}
        />
        <Typography gutterBottom>
          τ：死亡率
        </Typography>
        <Slider
          value={this.state.tau}
          aria-labelledby="tau-slider"
          valueLabelDisplay="auto"
          min={0}
          step={0.001}
          max={0.1}
          onChange={this.handleTauChange}
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

  handleBetaChange = (_ev, beta) => {
    this.setState({ beta });
    this.props.onParamsChange({
      ...this.state,
      beta
    });
  };

  handleLatentPeriodChange = (_ev, latentPeriod) => {
    this.setState({ latentPeriod });
    this.props.onParamsChange({
      ...this.state,
      latentPeriod
    });
  };


  handleInfectiousPeriodChange = (_ev, infectiousPeriod) => {
    this.setState({ infectiousPeriod });
    this.props.onParamsChange({
      ...this.state,
      infectiousPeriod
    });
  };

  handleTauChange = (_ev, tau) => {
    this.setState({ tau });
    this.props.onParamsChange({
      ...this.state,
      tau
    });
  };
}

SeirSettings.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.shape({}),
  }).isRequired,
  params: PropTypes.shape({
    population: PropTypes.number.isRequired,
    beta: PropTypes.number.isRequired,
    latentPeriod: PropTypes.number.isRequired,
    infectiousPeriod: PropTypes.number.isRequired,
    tau: PropTypes.number.isRequired,
  }).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SeirSettings);

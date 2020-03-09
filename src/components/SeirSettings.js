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
  state = this.props.params;
  render() {
    const { classes } = this.props;
    const params = this.state;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          N：人数
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
          β：伝達係数
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
        <Typography gutterBottom>
          lp：潜伏期間
        </Typography>
        <Slider
          defaultValue={params.latentPeriod}
          aria-labelledby="latent-period-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={15}
          onChange={this.handleLatentPeriodChange}
        />

        <Typography gutterBottom>
          ip：感染期間
        </Typography>
        <Slider
          defaultValue={params.infectiousPeriod}
          aria-labelledby="infectious-period-slider"
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={15}
          onChange={this.handleGammaChange}
        />
        <Typography gutterBottom>
          τ：死亡率
        </Typography>
        <Slider
          defaultValue={params.tau}
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
  classes: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SeirSettings);

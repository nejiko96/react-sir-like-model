import React, {Component} from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const styles = theme => ({
  root: {
    width: 400,
    padding: 10,
  },
});

class SirSettings extends Component {
  state = {
    population: 4,
    beta: 0.5,
    infectiousPeriod: 3,
  };

  static getDerivedStateFromProps(props, state) {
    return props.params;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          {i18n.t('sir.settings.population')}
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
          {i18n.t('sir.settings.beta')}
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
          {i18n.t('sir.settings.ip')}
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

  handleInfectiousPeriodChange = (_ev, infectiousPeriod) => {
    this.setState({ infectiousPeriod });
    this.props.onParamsChange({
      ...this.state,
      infectiousPeriod
    });
  };
}

SirSettings.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  params: PropTypes.shape({
    population: PropTypes.number.isRequired,
    beta: PropTypes.number.isRequired,
    infectiousPeriod: PropTypes.number.isRequired,
  }).isRequired,
  onParamsChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SirSettings);

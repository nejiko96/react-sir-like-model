import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const styles = theme => ({});

function valuetext(value) {
  return 10**value;
}

class Settings extends Component {
  state = {
    population: 4,
    duration: 3,
    beta: 0.5,
  };
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography gutterBottom>
          Population
        </Typography>
        <Slider
          defaultValue={this.state.population}
          getAriaValueText={valuetext}
          aria-labelledby="population-slider"
          valueLabelDisplay="on"
          min={1}
          step={1}
          max={8}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Settings);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GithubCircle from 'mdi-material-ui/GithubCircle';

import Settings from './components/Settings';
import SettingsContainer from './containers/SettingsContainer';

const styles = theme => ({
  root: {
    // display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    // flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              感染症流行シミュレーター
            </Typography>
            <Tooltip title="View source on Github" aria-label="View source on Github">
              <IconButton
                color="inherit"
                href="https://github.com/nejiko96/react-sir-model"
              >
                <GithubCircle fontSize="large" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
        <Settings />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

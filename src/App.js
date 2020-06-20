import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js';

import MockSirContainer from './containers/MockSirContainer';
import SirContainer from './containers/SirContainer';
import SeirContainer from './containers/SeirContainer';

const styles = (theme) => ({
  root: {
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(3),
  },
});

const App = (props) => {
  const { t, i18n } = useTranslation();
  const { classes } = props;
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {t('app.title')}
          </Typography>
          <Button
            color="inherit"
            onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
          >
            { lang === 'en' ? '日本語' : 'English' }
          </Button>
          <Tooltip title="View source on Github" aria-label="View source on Github">
            <IconButton
              color="inherit"
              href="https://github.com/nejiko96/react-sir-like-model"
            >
              <Icon path={mdiGithub} size="1.5em" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <MockSirContainer />
        <SirContainer />
        <SeirContainer />
      </main>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    grow: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

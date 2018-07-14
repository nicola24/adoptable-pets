import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pets from '@material-ui/icons/Pets';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  button: {
    fontSize: 20,
  },
};

const Header = () => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography variant="title" color="inherit">
        <Grid container spacing={16} alignItems="center">
          <Grid item>
            <Pets />
          </Grid>
          <Grid item>
            Pet Finder Project - Powered by
            <Button href="https://www.petfinder.com" target="_blank" color="inherit" size="small" style={styles.button}>
            Petfinder.com
            </Button>
          </Grid>
        </Grid>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

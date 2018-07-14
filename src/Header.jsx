import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pets from '@material-ui/icons/Pets';
import Grid from '@material-ui/core/Grid';

const Header = () => (
  <AppBar position="absolute" className="animated bounceInLeft">
    <Toolbar>
      <Typography variant="title" color="inherit">
        <Grid container spacing={16} alignItems="center">
          <Grid item>
            <Pets />
          </Grid>
          <Grid item>
            Pet Finder Project - Powered by
          </Grid>
        </Grid>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pets from '@material-ui/icons/Pets';

const Header = () => (
  <div>
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          <Pets />
          Pet Finder Project - Powered by Petfinder.com
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;

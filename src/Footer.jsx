import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <Card>
    <CardContent>
      <Typography variant="caption">
        Pet Finder by Nicolas Peyrichou, Copyright &copy; 2018
      </Typography>
    </CardContent>
  </Card>
);

export default Footer;

import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <Card>
    <CardContent>
      <Typography variant="caption">
        {'Pet Finder by Nicolas Peyrichou, Copyright © 2018 - Powered by '}
        <a href="https://www.petfinder.com" target="_blank" rel="noreferrer noopener">
        Petfinder.com
        </a>
      </Typography>
    </CardContent>
  </Card>
);

export default Footer;

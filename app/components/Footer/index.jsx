import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import A from './A';

const Footer = () => (
  <Card>
    <CardContent>
      <Typography variant="caption">
        {'Adoptable Pets by Nicolas Peyrichou, Copyright © 2018 - Powered by '}
        <span>
          <A href="https://www.petfinder.com" target="_blank" rel="noreferrer noopener">
          Petfinder.com
          </A>
        </span>
      </Typography>
    </CardContent>
  </Card>
);

export default Footer;

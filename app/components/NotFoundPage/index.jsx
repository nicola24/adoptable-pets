import React from 'react';

import P from './P';
import Button from './Button';
import Container from './Container';
import Img from './Img';

const NotFoundPage = () => (
  <Container>
    <Img src="https://i.imgur.com/C5Snwa4.png" alt="404" />
    <P>
      Sorry, the page was not found
    </P>
    <Button to="/dashboard">
      GO BACK
    </Button>
  </Container>
);

export default NotFoundPage;

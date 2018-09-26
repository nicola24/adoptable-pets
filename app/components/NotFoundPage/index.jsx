import React from 'react';

import P from './P';
import Button from './Button';
import Container from './Container';
import Img from './Img';
import NotFoundImg from '../../images/notfound.png';

const NotFoundPage = () => (
  <Container>
    <Img src={NotFoundImg} alt="404" />
    <P>
      Sorry, the page was not found
    </P>
    <Button to="/dashboard">
      GO BACK
    </Button>
  </Container>
);

export default NotFoundPage;

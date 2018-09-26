import React from 'react';

import Button from './Button';
import Container from './Container';
import FullScreenVideo from './FullScreenVideo';
import Overlay from './Overlay';
import Content from './Content';
import Video from './Video';
import Div from './Div';
import H1 from './H1';
import P from './P';
import GitHub from '../../images/github.png';

const Homepage = () => (
  <Container>
    <FullScreenVideo>
      <Video
        src="https://www.videvo.net/videvo_files/converted/2017_09/videos/170804_A_Lombok_002.mp499448.mp4"
        autoPlay
        loop
        muted
      />
    </FullScreenVideo>
    <Overlay />
    <Content>
      <H1>
        Welcome to Adoptable Pets
      </H1>
      <P>
        Ready to find your dream pet?
      </P>
      <Button to="/dashboard">
        Find A Pet
      </Button>
      <Div>
        <a href="https://github.com/nicola24/adoptable-pets" target="_blank" rel="noopener noreferrer">
          <img alt="github" src={GitHub} width="70" />
        </a>
      </Div>
    </Content>
  </Container>
);

export default Homepage;

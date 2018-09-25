import React from 'react';

import Button from './Button';
import Container from './Container';
import FullScreenVideo from './FullScreenVideo';
import Overlay from './Overlay';
import Content from './Content';
import Video from './Video';
import H1 from './H1';
import P from './P';

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
    </Content>
  </Container>
);

export default Homepage;

import React from 'react';

import Typist from 'react-typist';

import Button from './Button';
import Container from './Container';
import FullScreenVideo from './FullScreenVideo';
import Overlay from './Overlay';
import Content from './Content';
import Video from './Video';
import Div from './Div';
import Space from './Space';
import H1 from './H1';
import Span from './Span';
import GitHub from '../../images/github.png';

const Home = () => (
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
        <Typist startDelay={500}>
          Welcome to Adoptable Pets
          <Space />
          <Span>
            Ready to find your dream puppy?
            <Typist.Backspace count={6} delay={600} />
            kitten?
            <Typist.Backspace count={7} delay={600} />
            pet?
          </Span>
        </Typist>
      </H1>
      <br />
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

export default Home;

import React from 'react';

import { Container, Gif } from './styles';

import gif from '../../Assets/shrek.gif';

const Main: React.FC = () => {
  return (
    <Container>
      <Gif source={gif} />
    </Container>
  );
};

export default Main;

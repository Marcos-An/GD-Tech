import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Olá!</h1>
        <h4>Nós estamos aqui para salvar o seu PC</h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Nós estamos aqui para salvar o seu PC" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);

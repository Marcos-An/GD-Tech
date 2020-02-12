import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Nós estamos aqui para salvar o seu PC" />
      </Thumbnail>
      <Details>
        <p>
          Nós somos estudantes de Sistemas de informação na UFGD e estamos aqui
          para te ajudar. Formatamos computados e instalamos qualquer programa
          que você precise, com um{' '}
          <strong style={{ color: `#0468bf` }}>preço camarada</strong> pra você
          que é <strong style={{ color: `#0468bf` }}> universitário </strong>
        </p>
        <Button as={AnchorLink} href="#contact">
          Solicite um orçamento
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

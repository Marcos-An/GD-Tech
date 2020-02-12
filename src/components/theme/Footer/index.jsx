import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import LOGO from '../../../../public/GDTech.png';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <img src={LOGO} alt="" style={{ height: 40, marginBottom: 0 }} />
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}`}
          >
            <img width="24" src={icon} alt={name} style={{ marginRight: 10 }} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

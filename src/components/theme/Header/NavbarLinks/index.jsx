import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import social from '../../Footer/social.json';
import { Wrapper, Links } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">Sobre</AnchorLink>
    <AnchorLink href="#contact">Contato</AnchorLink>
    <Links>
      {social.map(({ id, name, link, icon }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}`}
        >
          <img height="20" src={icon} alt={name} style={{ marginRight: 10 }} />
        </a>
      ))}
    </Links>
  </Wrapper>
);

export default NavbarLinks;

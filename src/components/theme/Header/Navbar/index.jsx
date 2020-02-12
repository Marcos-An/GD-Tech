import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import LOGO from '../../../../../public/GDTech.png';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <img src={LOGO} alt="" style={{ height: 30 }} />
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;

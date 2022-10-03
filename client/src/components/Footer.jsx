import React from 'react';
import Logo from '../img/react-svgrepo-com.svg';
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='LOGO-FOOTER' />
      <span>
        Made with <span style={{ color: 'red' }}>♥️</span> and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;

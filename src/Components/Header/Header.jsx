import React from "react";
import m from './Header.module.css';

const Header = () => {
  return(
      <header className={m.header}>
        <img className={m.headerLogo}
            src={'https://www.seekpng.com/png/full/30-303889_slideshare-white-slideshare-white-logo-png.png'}/>
      </header>
  );
}

export default Header;
import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Menu />
      </header>
    );
  }
}


export default Header;

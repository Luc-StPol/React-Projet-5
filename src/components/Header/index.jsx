import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import '../../styles/Style.scss';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <nav>
        <Link className="link-style" to="/">
          Accueil
        </Link>
        <Link className="link-style" to="/propos">
          {' '}
          A propos
        </Link>
      </nav>
    </header>
  );
}

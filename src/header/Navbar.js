import React from 'react';

import { Link } from 'react-router-dom';

function Navbar({ toggle, on }) {
  return (
    <nav className={on ? 'visible-navbar' : 'hidden-navbar'}>
      <Link onClick={toggle} className="link" to="/projects">
        Projects
      </Link>

      <div style={{ width: '100%', borderBottom: '2px solid #1d1d1f' }}></div>

      <Link onClick={toggle} className="link" to="/about">
        About
      </Link>

      <div style={{ width: '100%', borderBottom: '2px solid #1d1d1f' }}></div>

      <Link onClick={toggle} className="link" to="/resumé">
        Resumé
      </Link>
    </nav>
  );
}

export default Navbar;

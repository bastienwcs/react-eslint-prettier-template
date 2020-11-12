import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Student List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

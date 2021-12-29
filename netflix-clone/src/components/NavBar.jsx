import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="container-header">
          <h2 id="logo">NETFLIX</h2>
          <nav>
            <ul>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Incício</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Séries</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Filmes</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Bombando</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Minha Lista</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
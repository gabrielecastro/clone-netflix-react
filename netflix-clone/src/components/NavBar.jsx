import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="container-header">
          <NavLink className="header-nav-link" exact activeClassName="active" to="/">
          <h2 id="logo">NETFLIX</h2>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/">Incício</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/series">Séries</NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" exact activeClassName="active" to="/movies">Filmes</NavLink>
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

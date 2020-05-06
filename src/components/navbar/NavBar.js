import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light navbar-custom">
    <div className="container">
      <a className="navbar-brand" href="/" id="logo">Devin Carr</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    );
};

export default NavBar;

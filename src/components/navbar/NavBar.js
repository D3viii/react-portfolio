import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg" id="coolNav">
        <div className="container" id="nameNAV">
          <a className="navbar-brand" href="/">
            Devin Carr
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="nav-item"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="nameNAV"></span>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

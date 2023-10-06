import React, { useState } from 'react';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar bg-body-tertiary navbar-expand-lg fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src="./logos/logoLinealLetraNegra.png" alt="Logo" width="80" className="d-inline-block align-text-top" />
        </a>
        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#novedades" className="nav-link" onClick={closeNav}>
                Novedades
              </a>
            </li>
            <li className="nav-item">
              <a href="#videos" className="nav-link" onClick={closeNav}>
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a href="#spotify" className="nav-link" onClick={closeNav}>
                Spotify
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

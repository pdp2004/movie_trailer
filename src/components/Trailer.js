import React from "react";
// import "./IMDbSearchBar.css"; // CSS file

const Trailer = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="imdb-logo">Pdp</span>
      </div>

      {/* Menu */}
      <div className="menu">
        <button className="menu-button"><i class="bi bi-list"></i>Menu</button>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <select className="dropdown">
          <option>All</option>
          <option>Titles</option>
          <option>TV Episodes</option>
          <option>Celebs</option>
          <option>Companies</option>
          <option>Keywords</option>
          {/* Add more dropdown options */}
        </select>
        <input type="text" placeholder="Search IMDb" className="search-input" />
        <button className="search-icon"><i class="bi bi-search"></i></button>
      </div>

      {/* Other Options */}
      <div className="options">
        <span className="imdb-pro">Pdp<span className="pro">Pro</span></span>
        <button className="watchlist">Watchlist</button>
        <button className="sign-in">Sign In</button>
        <select className="language-dropdown">
          <option>EN</option>
        </select>
      </div>
    </div>
  );
};

export default Trailer;

import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__option">
        <HeaderOption title="Soccer" />
        <HeaderOption title="Hockey" />
        <HeaderOption title="BasketBall" />
        <HeaderOption title="Tennis" />
        <HeaderOption title="LiveScore Bet" />
        <HeaderOption title="Mobile" />
        <HeaderOption title="Contact Us" />
      </div>
      <img
        src="https://cdn3.livescore.com/web/img/logo-univ-narrow.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;

import React from "react";
import "./HeaderOption.css";
function HeaderOption({ title }) {
  return (
    <div className="headerOption">
      <div class="headerOption__text">{title}</div>
    </div>
  );
}

export default HeaderOption;

import React from "react";
import "./SidebarOption.css";
import InputIcon from "@material-ui/icons/Input";
import { useHistory } from "react-router-dom";
function SidebarOption({ title, url }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(url);
    history.go(0);
  };
  return (
    <div className="sidebaroption">
      <InputIcon className="sidebaroption__icon" />
      <div className="sidebaroption__text" onClick={handleClick}>
        {title}
      </div>
    </div>
  );
}

export default SidebarOption;

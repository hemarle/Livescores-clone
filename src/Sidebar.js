import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Router>
        <Switch>
          <Route path="">
            <SidebarOption title="Live" url="live" />
            <SidebarOption title="EPL" url="epl" />
            <SidebarOption title="Champions League" url="UEFA" />
            <SidebarOption title="La Liga" url="laliga" />
            <SidebarOption title="Bundesliga" url="bundesliga" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Sidebar;

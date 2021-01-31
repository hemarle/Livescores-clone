import React, { useEffect } from "react";
import "./Rightbar.css";
import RightbarOption from "./RightbarOption.js";
import db from "./firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Rightbar() {
  const [{ EPL, LALIGA, BUNDESLIGA }, dispatch] = useStateValue();
  return (
    <div className="rightbar">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/live" />
          </Route>
          <Route path="/live">
            <RightbarOption url="live" data={EPL} />
          </Route>
          <Route path="/EPL">
            <RightbarOption url="EPL" data={EPL} />
          </Route>
          <Route path="/laliga">
            <RightbarOption url="EPL" data={LALIGA} tablename="La Liga" />
          </Route>
          <Route path="/UEFA">
            <RightbarOption url="UEFA" data={EPL} />
          </Route>
          <Route path="/bundesliga">
            <RightbarOption
              url="bundesliga"
              data={BUNDESLIGA}
              tablename="Bundesliga"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Rightbar;

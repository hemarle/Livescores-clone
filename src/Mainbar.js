import React, { useEffect, useState } from "react";
import League from "./League";
import "./Mainbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useStateValue } from "./StateProvider";

function Mainbar() {
  const [{ LIVES, EPL, BUNDESLIGA, LALIGA, UEFA }, dispatch] = useStateValue(
    []
  );

  return (
    <div className="mainbar">
      <div className="mainbar__advert">
        <img src="https://ad.adservprolv.com/images/delivery/54d799422909b890dbbd.jpg" />
      </div>

      <div className="mainbar__date"></div>

      <div className="mainbar__body">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/live" />
            </Route>
            <Route path="/live">
              <League data={LIVES} live />
            </Route>
            <Route path="/epl">
              <League data={EPL} country="England" league="Premier League" />
            </Route>
            <Route path="/bundesliga">
              <League data={BUNDESLIGA} country="Germany" league="Bundesliga" />
            </Route>
            <Route path="/uefa">
              <League data={UEFA} country="Uefa" league="Champions League" />
            </Route>
            <Route path="/laliga">
              <League data={LALIGA} country="Spanish" league="La Liga" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Mainbar;

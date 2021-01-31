import React, { useEffect } from "react";
import "./RightBarOption.css";
import db from "./firebase";
import { actionTypes } from "./reducer.js";

import { useStateValue } from "./StateProvider";
function RightbarOption({ url, data, tablename }) {
  //   const [{ EPL, UEFA }, dispatc] = useStateValue();

  // console.log("EPL", EPL);

  // console.log("uefa", UEFA);
  // console.log("lives", LIVES);
  // console.log("table", table);
  // console.log("fixture", fixture);
  return (
    <div className="rightbarOption">
      <div className="rightbar__ads">{/*Place Your ads here*/}</div>
      <div className="rightbar__title">LiveScore Table</div>
      <div className="rightbar__table">
        <div className="rightbar__tableTitle">
          <h6 className="rightbar__tableTitleLeague">
            {tablename ? tablename : "Premier League"}
          </h6>
          <h6 className="rightbar__tableTitleP">P</h6>
          <h6 className="rightbar__tableTitlePTS">PTS</h6>
        </div>

        {data &&
          data.table?.map((tab) => (
            <div className="rightbar__tableBody">
              <div className="rightbar__position">{tab.rank}</div>
              <div className="rightbar__club">{tab.name}</div>
              <div className="rightbar__played">{tab.matches}</div>
              <div className="rightbar__points">{tab.points}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RightbarOption;

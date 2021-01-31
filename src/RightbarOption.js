import React, { useEffect } from "react";
import "./RightbarOption.css";

function RightbarOption({ url, data, tablename }) {
  return (
    <div className="rightbarOption">
      <div className="rightbarOption__ads">{/*Place Your ads here*/}</div>
      <div className="rightbarOption__title">LiveScore Table</div>
      <div className="rightbarOption__table">
        <div className="rightbarOption__tableTitle">
          <div className="rightbarOption__tableTitleLeague">
            {tablename ? tablename : "Premier League"}
          </div>
          <div className="rightbarOption__tableTitleP">P</div>
          <div className="rightbarOption__tableTitlePTS">PTS</div>
        </div>

        {data &&
          data.table?.map((tab) => (
            <div className="rightbarOption__tableBody">
              <div className="rightbarOption__position">{tab.rank}</div>
              <div className="rightbarOption__club">{tab.name}</div>
              <div className="rightbarOption__played">{tab.matches}</div>
              <div className="rightbarOption__points">{tab.points}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RightbarOption;

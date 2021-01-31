import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import "./League.css";
function League({ data, live, league, country }) {
  console.log("hu", data);

  return (
    <div className="league">
      <div className="league__title">
        <div className="league__name">
          {live ? (
            <div>
              <u>Live</u> - <u>Scores</u>
            </div>
          ) : (
            <div>
              <u>{country}</u> - <u>{league}</u>
            </div>
          )}
        </div>

        <div className="league__date">January 26</div>
      </div>
      <div className="league__matches">
        <table class="table table-striped table-sm">
          <tbody>
            {data.fixture?.map((tit) => (
              <tr>
                <td scope="row" className="league__time">
                  {live ? tit.time : tit.time.slice(0, 5)}
                </td>
                <td className="league__home">{tit.home_name}</td>
                <td className="league__score">
                  {live ? tit?.score.replace(" - ", ":") : tit.date}
                </td>
                <td className="league__away">{tit.away_name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="league__time">20:00</div>
        <div className="league__home">Liver pool</div>

        <div className="league__scores">1-1</div>
        <div className="league__away">MAn U</div> */}
      </div>
    </div>
  );
}

export default League;

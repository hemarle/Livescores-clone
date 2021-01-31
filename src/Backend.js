import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import db from "./firebase";
import League from "./League";

function Backend() {
  const [
    { LALIGA, EPL, BUNDESLIGA, LIVES, BASKET },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    async function League(item) {
      const requestTable = await axios.get(requests.standing[item]);
      const requestLive = await axios.get(requests.livescore[item]);
      const requestFixture = await axios.get(requests.fixture[item]);
      const requestHistory = await axios.get(requests.history[item]);

      db.collection("football").doc(item).set({
        lives: requestLive.data.data.match,
        table: requestTable.data.data.table,
        fixture: requestFixture.data.data.fixtures,
        history: requestHistory.data.data.match,
      });
    }
    League("EPL");
    League("LALIGA");
    League("UEFA");
    League("BUNDESLIGA");
  }, []);

  function LeagueDetails(name) {
    useEffect(() => {
      db.collection("football")
        .doc(name)

        .onSnapshot((snapshot) => {
          dispatch({
            type: actionTypes[name],
            [name]: {
              table: snapshot.data()?.table,
              live: snapshot.data()?.live,
              fixture: snapshot.data()?.fixture,
              history: snapshot.data()?.history,
            },
          });
        });
    }, []);
  }

  LeagueDetails("EPL");
  LeagueDetails("BUNDESLIGA");
  LeagueDetails("UEFA");
  LeagueDetails("LALIGA");

  async function setLives() {
    const liveData = await axios.get(requests.LIVES);

    db.collection("football").doc("lives").set({
      lives: liveData.data.data.match,
    });
  }

  setLives();

  useEffect(() => {
    db.collection("football")
      .doc("lives")
      .onSnapshot((snapshot) => {
        dispatch({
          type: actionTypes.LIVES,
          LIVES: {
            fixture: snapshot.data()?.lives,
          },
        });
      });
  }, []);

  // console.log("1", EPL);
  // console.log("12", LIVES);
  // console.log("13", LALIGA);

  // useEffect(() => {
  //   db.collection("football")
  //     .doc("EPL")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_UEFA,
  //         EPL: {
  //           table: snapshot.data().table,
  //           live: snapshot.data().live,
  //           fixture: snapshot.data().fixture,
  //           history: snapshot.data().history,
  //         },
  //       });
  //     });

  //   db.collection("football")
  //     .doc("laliga")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_EPL,
  //         EPL: {
  //           liga: "hello",
  //         },
  //       });
  //     });
  //   db.collection("football")
  //     .doc("laliga")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_FIXTURE,
  //         fixture: {
  //           liga: "hello",
  //         },
  //       });
  //     });
  //   db.collection("football")
  //     .doc("laliga")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_UEFA,
  //         UEFA: {
  //           liga: "hello",
  //         },
  //       });
  //     });
  //   db.collection("football")
  //     .doc("laliga")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_TABLE,
  //         table: {
  //           liga: "hello",
  //         },
  //       });
  //     });

  //   db.collection("football")
  //     .doc("live")
  //     .onSnapshot((snapshot) => {
  //       dispatch({
  //         type: actionTypes.SET_LIVES,
  //         lives: snapshot.data().lives,
  //       });
  //     });
  // }, []);
  return <div></div>;
}

export default Backend;

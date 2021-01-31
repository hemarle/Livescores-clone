import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Mainbar from "./Mainbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Backend from "./Backend";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Backend />
        <Header />
      </div>
      <div className="app__body">
        <Sidebar />
        <Mainbar />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;

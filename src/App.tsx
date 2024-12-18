import React from "react";
import "./index.css";
import DateAndTimePicker from "./component/DateAndTimePicker";
import Tabs from "./component/Tabs";
import MuiTimeline from "./component/MuiTimeline";
import { MuiMasonry } from "./component/MuiMasonry";

function App() {
  return (
    <div className="">
      <DateAndTimePicker />
      <Tabs />
      <MuiTimeline />
      <MuiMasonry />
    </div>
  );
}

export default App;

import Routing from "./srt/navigation/Routing";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default function App() {
  return ReactDOM.render(
    <React.StrictMode>
      <Routing />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

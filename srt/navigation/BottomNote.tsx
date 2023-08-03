import React from "react";
import { Link } from "react-router-dom";

export default function BottomNote() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        position: "absolute",
        bottom: 0,
        display: "flex",
        // justifyContent: "center",
        justifyContent: "space-between",
        paddingTop: "0.5%",
        paddingBottom: "0.5%",
      }}
    >
      <div style={{ paddingLeft: "2%" }}>This project made by : Aditya Rosyitama</div>
      <div
        style={{ paddingRight: "2%", display: "flex", flexDirection: "row" }}
      ></div>
    </div>
  );
}

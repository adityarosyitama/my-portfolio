import React from "react";
import { Link } from "react-router-dom";
import { ButtonHeadNav } from "../components/global/Button";

export default function Navbar(setNumb) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        justifyContent: "space-between",
        paddingTop: "0.5%",
        paddingBottom: "0.5%",
      }}
    >
      <div style={{ paddingLeft: "2%"}}></div>
      <div style={{ paddingRight: "2%", display:'flex',flexDirection:'row'}}>
        <ButtonHeadNav
          linknav={"/home"}
          text={"Home"}
          colortext={"white"}
          marginlefttext={10}
        />
        <ButtonHeadNav
          linknav={"/about"}
          text={"About"}
          colortext={"white"}
          marginlefttext={10}
        />
        <ButtonHeadNav
          linknav={"/contact"}
          text={"Contact"}
          colortext={"white"}
          marginlefttext={10}
        />
      </div>
    </div>
  );
}

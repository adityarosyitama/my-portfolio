import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screen/home/Home";
import About from "../screen/about/About";
import Contact from "../screen/contact/Contact";
import Navbar from "./Navbar";
import BottomNote from "./BottomNote";

export default function Routing() {
  return (
    <BrowserRouter>
      <div
        style={{
          flex:1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor:'grey',
        }}
      >
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <BottomNote />
        </>
      </div>
    </BrowserRouter>
  );
}

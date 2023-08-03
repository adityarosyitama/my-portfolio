import React from "react";
import { Link } from "react-router-dom";

export const ButtonHeadNav = ({ text, linknav,colortext,marginlefttext}) => {
  return (
    <div >
      <Link to={linknav} style={{marginLeft:marginlefttext,color:colortext}}>{text}</Link>
    </div>
  );
};

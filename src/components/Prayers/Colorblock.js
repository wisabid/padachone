import React from "react";

const styles = {
  width: "20px",
  height: "20px",
  background: "orange",
  borderRadius: "5px",
  marginRight: "5px"
};
const Colorblock = ({ wide }) => {
  const colors = [
    "orange",
    "yellow",
    "red",
    "cadetblue",
    "chocolate",
    "yellowgreen",
    "tomato",
    "slateblue",
    "cornflowerblue",
    "deepskyblue"
  ];
  return <div style={{ ...styles, width: wide, background : colors[Math.floor(Math.random()*10)] }}></div>;
};

export default React.memo(Colorblock);

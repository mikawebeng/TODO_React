import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLedyStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentLedyStyle}>{children}</p>;
};

export default ColorfulMessage;

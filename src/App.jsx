import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setShow(!show);
  };

  if (num > 0) {
    if (num / 3 === 0) {
      show || setShow(true);
    } else {
      show && setShow(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おはよう</ColorfulMessage>
      <ColorfulMessage color="pink">おはようございます</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <p>{num}</p>
      <button onClick={onClickShowFlag}>on/off</button>
      {setShow && <p>(^^♪</p>}
    </>
  );
};

export default App;

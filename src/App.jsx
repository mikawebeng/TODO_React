import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setfaseShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setfaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num / 3 === 0) {
        faseShowFlag || setfaseShowFlag(true);
      } else {
        faseShowFlag && setfaseShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おはよう</ColorfulMessage>
      <ColorfulMessage color="pink">おはようございます</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {setfaseShowFlag && <p>(^^♪</p>}
    </>
  );
};

export default App;

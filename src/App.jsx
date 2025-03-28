import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColofulMessage";

export const App = () => {
  console.log("Appレンダリング");
  const [num, setNum] = useState(0);
  const [isShowFace, SetIsShowFace] = useState(true);
  //↑これも分割代入の一種 初期値設定可能↑
  const countUp = () => {
    setNum(num + 1);
    // setNum((prev) => prev + 1);
    //↑setNumの引数にアロー関数を渡す。prevの文字列はなんでもいい
    // この書き方だと、正確な「現在の値」を参照できる
  };

  const onClickToggle = () => {
    SetIsShowFace(!isShowFace);
  };

  //第一引数に関数、第二引数に配列を取ることができる
  useEffect(() => {
    console.log("useEfect");
    //３の倍数で顔文字を表示
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || SetIsShowFace(true);
      } else {
        isShowFace && SetIsShowFace(false);
      }
    }
  }, [num]);
  //空配列であれば、初回レンダリング時にのみ実行
  //それ以外は、その値が変更された時のみ実行（監視対象）

  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={countUp}>数字を足す</button>
      <h3>{num}</h3>

      <button onClick={onClickToggle}>顔切り替え</button>
      {isShowFace && <h3>Σ੧(❛□❛✿)</h3>}
    </>
  );
};

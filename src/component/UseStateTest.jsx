import { useState } from "react";
export default function UseStateTest() {
  // TODO: なんかできなかった、記事が古いからかな？
  // 参考：https://qiita.com/7kaji/items/7197f0062337b002a3c1
  // const useInput = (initialValue) => {
  //   const [value, setter] = useState(initialValue);
  //   return { value, onChange: (e) => setter(e.target.value) };
  // };

  /**
   * inputの扱い
   */
  const [message, setMessage] = useState("初期値です");
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  /**
   * count 系
   */
  const [count, setCount] = useState(0);
  const countChange = (type) => {
    setCount((prevState) => {
      if (type === "up") return prevState + 1;
      if (type === "down") return prevState - 1;
    });
  };

  // アンチパターン
  // count に直接変更を加えるのは良くない
  // const countChangeAntiPattern = (type) => {
  //   setCount(() => {
  //     if (type === "up") return count + 1;
  //     if (type === "down") return count - 1;
  //   });
  // };
  // console.log(countChangeAntiPattern);

  return (
    <div>
      <h2>フォームのサンプル</h2>
      <input type="text" value={message} onChange={changeMessage} />
      <p>{message}</p>

      <br />

      <h2>カウントのサンプル</h2>
      <h3>count:{count}</h3>
      <button
        onClick={() => {
          countChange("up");
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          countChange("down");
        }}
      >
        down
      </button>
    </div>
  );
}

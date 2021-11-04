import { useState } from "react";
export default function UseStateTest() {
  // TODO: なんかできなかった、記事が古いからかな？
  // 参考：https://qiita.com/7kaji/items/7197f0062337b002a3c1
  // const useInput = (initialValue) => {
  //   const [value, setter] = useState(initialValue);
  //   return { value, onChange: (e) => setter(e.target.value) };
  // };

  const [message, setMessage] = useState("初期値です");
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <input type="text" value={message} onChange={changeMessage} />
      <p>{message}</p>
    </div>
  );
}

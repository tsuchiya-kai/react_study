import { useState } from "react";
export default function UseStateTest() {
  // TODO: なんかできなかった
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

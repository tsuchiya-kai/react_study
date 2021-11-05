import { useState, useEffect } from "react";
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

  /**
   * useEffectの学習
   */
  const [githubId, setGithubId] = useState("tsuchiya-kai");
  const [inputUserForGithub, setInputUserForGithub] = useState("");
  const [gitHubData, setGitHubData] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          console.log("ユーザーが存在しませんでした");
          setGitHubData({
            name: "ユーザーが存在しません！",
            avatar_url:
              "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
          });
          return;
        }
        console.log({ githubId, data });
        setGitHubData(data);
      })
      .catch((e) => {
        console.log("gitHubアカウントの取得に失敗しました", { e });
      });
  }, [githubId]);

  //

  return (
    <div>
      <h2>フォームのサンプル</h2>
      <input type="text" value={message} onChange={changeMessage} />
      <p>{message}</p>

      <br />
      <hr />

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

      <br />
      <hr />

      <h2>gitHubからアカウントを取得する</h2>
      <input
        type="text"
        value={inputUserForGithub}
        onChange={(e) => setInputUserForGithub(e.target.value)}
      />
      <button
        onClick={() => {
          setGithubId(inputUserForGithub);
        }}
      >
        gitHubユーザーを更新する！
      </button>

      <h3>
        ユーザー名：
        {gitHubData?.name ?? gitHubData
          ? "名前が設定されていません"
          : "ロード中..."}
      </h3>
      <img src={gitHubData?.avatar_url} alt="" />
    </div>
  );
}

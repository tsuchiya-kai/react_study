const TestComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content ?? "propsが指定されていません"}</p>
    </div>
  );
};

export default TestComponent;

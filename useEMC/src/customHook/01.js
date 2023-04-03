import { useInput } from "./useInput";

function displayMsg(msg) {
  alert(msg);
}

function C01() {
  const [value, handleChange, handleSubmit] = useInput("시작", displayMsg);
  const [value2, handleChange2, handleSubmit2] = useInput("추가", displayMsg);

  return (
    <div>
      <h1>customHook</h1>
      <p>{value}</p>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleSubmit}>확인</button>
      <br />
      <input type="text" onChange={handleChange2} value={value2} />
      <button onClick={handleSubmit2}>확인</button>
    </div>
  );
}

export default C01;

import React, { useEffect, useState } from "react";

const Section3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const textChange =(e)=>{
    setText(e.target.value);
  };
  // 컴포넌트 렌더시 실행
  useEffect(() => {
    console.log("렌더시");
    // alert("실행");
  });
  // 컴포넌트 마운트시
  useEffect(()=>{
      console.log("마운트시");
      // alert("마운트완료")
    },[]/* [] - 처음에만 출력 */);
    // 특정 값이 변겨오딤
    useEffect(() => {
      console.log("🔔카운트가 변경됨");
    },[count]);
  return (
    <div>
      <h2>클릭한 횟수: {count}</h2>
      <button type="button" onClick={(e) => setCount((count) => count + 1)}>
        Click Me!
      </button>
      <hr />
      <input type={text} value={text} onChange={textChange} />
      <br />
      입력한 글자:{text}
    </div>
  );
};

export default Section3;
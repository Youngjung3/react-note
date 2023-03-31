import React, { useState, useEffect, useCallback } from "react";

const Cb1 = () => {
  const [num, setNum] = useState(0);
  // 의존성배열에 값을 넣으면 값이 업데이트될 때 콜백함수호출
  const fn = useCallback(()=>{
      console.log(`"함수:" ${num}`);
  },[num]);

  useEffect(()=>{
    console.log(`fn이 변경됨`);
  },[fn])
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <hr />
      <button onClick={fn}>함수호출</button>
    </div>
  );
};
export default Cb1;
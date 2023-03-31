import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("째깍째깍");
    }, 1000);
    console.log("렌더시 실행");
    // clean-up
    // 언마운트시에 실행
    return()=>{
        clearInterval(timer);
        console.log("종료");
    }
  });
  return <div>타이머</div>;
};
export default Timer;

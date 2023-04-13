import {useState,useEffect,useRef} from "react";
import { useSpring, animated } from "@react-spring/web";
import "./spring.css"

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2000,
    config: { mass: 1, tension: 20, friction: 26 },
  });
  return (
    <animated.div>
      {number.to((n) => {
        return n.toFixed(0);
      })}
    </animated.div>
  );
}

const Spring = () => {
  const numberRef=useRef(null);
  const [isAnimated,setIsAnimated]=useState(false);
  useEffect(()=>{
    // console.log(numberRef.current.offsetHeight/2);
    const onScroll=()=>{
      const currentPosition=window.pageYOffset+window.innerHeight;
      // console.log(currentPosition);
      const targetPosition=numberRef.current.offsetTop + numberRef.current.offsetHeight/2;
      if(!isAnimated && currentPosition >= targetPosition){
        setIsAnimated(true);
      }
    };
    window.addEventListener('scroll',onScroll)
  },[isAnimated]);
  return (
    <div style={{fontSize:"5em"}}>
      <div className="section"></div>
      <h1 ref={numberRef}>
        {isAnimated && <Number n={100} />}
      </h1>
    </div>
  );
};
export default Spring;


// 스크롤바 핸들으 상단 좌표값 알아내기
// currentPosition
// window.pageYOffset
// window.innerHeight

// 애니메이트 대상 좌표값
// targetPosition
// numberRef.current.offsetTop
import React from "react";
import { useSpring, animated } from "@react-spring/web";

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
  return (
    <div style={{fontSize:"5em"}}>
      <h1>
        <Number n={100} />
      </h1>
    </div>
  );
};
export default Spring;

import React from "react";
import { useSpring, animated } from "react-spring";

const BounceTitle = () => {
  const { y } = useSpring({
    from: { y: 0 },
    to: { y: 10 },
    config: { duration: 1000 },
    reset: true,
    reverse: true,
  });

  return (
    <div className="title-container">
      <animated.div
        className="bounce-title"
        style={{ transform: y.interpolate((y) => `translateY(${y}px)`) }}
      >
        i
      </animated.div>
    </div>
  );
};

export default BounceTitle;

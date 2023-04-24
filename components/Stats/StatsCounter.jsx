// import React, { useState, useEffect } from "react";

// const Counter = ({ value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (count < value) {
//         setCount((prevCount) => prevCount + 1);
//       }
//     }, 10);
//     return () => clearInterval(intervalId);
//   }, [count, value]);

//   return (
//     <div
//       style={{
//         minWidth: "7rem",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {count}
//     </div>
//   );
// };

// export default Counter;
import React, { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";

const StatsCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (
      intersection &&
      intersection.intersectionRatio > 0.5 &&
      !animationCompleted
    ) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
          setAnimationCompleted(true);
        }
      }, stepTime);
    }
  }, [intersection, value, animationCompleted]);

  return (
    <div
      ref={ref}
      className="counter"
      style={{
        minWidth: "7rem",
        display: "flex",
      }}
    >
      <span className="count">{count}</span>
    </div>
  );
};

export default StatsCounter;

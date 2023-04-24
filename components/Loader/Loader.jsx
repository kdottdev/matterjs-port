import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Loader = ({ end }) => {
  // const slide1 = useSpring({
  //   to: { x: "-10%" },
  //   config: { duration: 1000, ease: "power1.out" },
  // });

  const props = useSpring({
    from: { x: -100 },
    to: { x: 100 },
    config: { duration: 1000 },
  });

  // const slide3 = useSpring({
  //   to: { x: "-30%" },
  //   config: { duration: 1500, ease: "power1.out" },
  //   delay: 1000,
  // });

  // const show = useSpring({
  //   to: { x: "0%", opacity: 1 },
  //   config: { duration: 2000, ease: "power1.out" },
  //   delay: 2000,
  // });

  // const hide = useSpring({
  //   to: { x: "200%" },
  //   config: { duration: 3000, ease: "power1.out" },
  // });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, ease: "power1.out" },
    delay: 1500,
  });

  const fadeOut = useSpring({
    from: { opacity: 1, y: "0" },
    to: { opacity: 0, y: "-100%" },
    config: { duration: 1000, ease: "power1.out" },
    delay: 3000,
    onRest: () => {
      end();
    },
  });

  return (
    <animated.div className="preloader" style={fadeOut}>
      <div className="prl-logo">
        <animated.h1 className="hide" style={fadeIn}>
          kdotdev
        </animated.h1>
      </div>
      <animated.div
        className="persianGreen-slider"
        style={{
          transform: props.x
            .to({
              range: [-100, 0, 100],
              output: ["-100%", "0%", "100%"],
            })
            .to((x) => `translateX(${x})`),
        }}
      />
      {/* <animated.div className="lightCyan-slider" style={slide1} />
      <animated.div className="white-slider" style={slide3} /> */}
    </animated.div>
  );
};

export default Loader;

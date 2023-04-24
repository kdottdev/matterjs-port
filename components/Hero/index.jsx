import parse from "html-react-parser";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import CanvasHeader from "../CanvasHeader/CanvasHeader";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, ease: "power1.out" },
    delay: 1500,
  });

  return (
    <animated.div style={{ position: "relative", zIndex: 1, ...fadeIn }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        <CanvasHeader />
      </div>
      <div
        style={{
          zIndex: 2,
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px) brightness(100%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(150%) saturate(120%)",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      ></div>
      <Div
        className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
        // style={{ backgroundImage: `url(${bgImageUrl})` }}
        style={{
          zIndex: 5,
        }}
      >
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="container">
          <Div className="cs-hero_text" style={{ zIndex: 3 }}>
            <h1 className="cs-hero_title">{parse(title)}</h1>
            <Div className="cs-hero_info">
              <Div>
                <Button btnLink={btnLink} btnText={btnText} />
              </Div>
              <Div>
                <Div className="cs-hero_subtitle">{subtitle}</Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      </Div>
    </animated.div>
  );
}

import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LogoEmmaus from "../assets/logoEmmaus.png";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function App() {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <>
      <div className="container">
        <div className="bgOne"> </div>
        <div className="bgTwo"> </div>
        <div className="bgThree"> </div>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 27 -5"
            />
          </filter>
        </svg>
        <div ref={ref} className="hooksMain" onMouseMove={handleMouseMove}>
          {trail.map((props, hook) => (
            <animated.div
              key={(props, hook.id)}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
      <div className="returnContainer">
        <img src={LogoEmmaus} className="logoEmmaus" alt="logo" />
        <h1 className="h1-err">ERREUR 404</h1>
        <h2 className="h2-err">Vous vous êtes égaré</h2>
        <button className="btnReturn" type="button">
          <Link to="/">
            <p>Retour</p>
          </Link>
        </button>
      </div>
    </>
  );
}

App.propTypes = {
  xy: PropTypes.shape({
    to: PropTypes.func.isRequired,
  }),
};

App.defaultProps = {
  xy: { to: () => {} },
};

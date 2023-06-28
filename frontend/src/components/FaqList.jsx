import React, { useState, useEffect, useRef } from "react";
import Chevron from "../assets/Faq/chevron.svg";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.warn(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.warn(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible" type="button">
        <span>Lorem ipsum dolor sit amet.</span>
        <img className={toggle && "active"} src={Chevron} alt="chevron" />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          suscipit quae maiores sunt ducimus est dolorem perspiciatis earum
          corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel
          quo eligendi ipsam.
        </p>
      </div>
    </div>
  );
}

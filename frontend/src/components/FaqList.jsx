import React, { useState } from "react";

const dataCollection = [
  {
    question: "What makes blockchain trustworthy?",
    answer:
      "There are three sides to this answer. Firstly, nobody but the owner of the data can access it without permission. Thus, it is a safe way to protect data from third parties who should not see the information. Secondly, the data can be tracked at any time. It comes with a timestamp which indicates when the information was written on the blockchain and it is always available for fetching. ",
  },
  {
    question: "Why Do You Want to Work at This Company?",
    answer:
      "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
  },
  {
    question: "What Are Your Greatest Strengths?",
    answer:
      "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
  },
  {
    question: "Can You Explain Why You Changed Career Paths?",
    answer:
      "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <div className="container">
      <div>
        <span className="accordion__title">Frequently asked questions</span>
        <h1>Let's answer some of your questions</h1>
        {dataCollection}
        {toggleAccordion}
      </div>
      <div className="accordion__faq" />
    </div>
  );
}

export default Accordion;

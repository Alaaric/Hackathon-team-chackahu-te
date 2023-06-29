import React from "react";
import Faq from "../assets/Faq/FAQ.svg";

function FaqList() {
  return (
    <div className="faq_list">
      <span className="faq_title">Comment pouvons-nous vous aider?</span>
      <h1>Répondons à vos questions!</h1>
      <img src={Faq} alt="Faq" className="Faq" />
      <div>
        <details>
          <summary>Pourquoi faire un don de vos smartphones?</summary>
          <p>
            Parce qu'ils restent dans vos tiroirs et qu'ils peuvent avoir une
            seconde vie
          </p>
        </details>
        <details>
          <summary>Pourquoi le ciel est bleu?</summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details>
          <summary>Pourquoi faut-il être éco responsable?</summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details>
          <summary>
            Je n'ai pas de smarpthone mais je souhaite faire don de mon oiseau.
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details>
          <summary>
            Je n'ai pas de smarpthone mais je souhaite faire don de ma voiture.
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details>
          <summary>
            J'ai un PC à 5000€ mais puis-je avoir un smartphone gratuit?
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
      </div>
    </div>
  );
}

export default FaqList;

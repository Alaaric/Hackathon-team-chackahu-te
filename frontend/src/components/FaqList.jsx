import Faq from "../assets/Faq/FAQ.svg";

function FaqList() {
  return (
    <div className="faqContainer">
      <img className="faqImg" src={Faq} alt="Faq" />
      <h1>Répondons à vos questions!</h1>
      <div className="detailsContainer">
        <details className="details1">
          <summary>Pourquoi faire un don de vos smartphones?</summary>
          <p>
            Parce qu'ils restent dans vos tiroirs et qu'ils peuvent avoir une
            seconde vie
          </p>
        </details>
        <details className="details2">
          <summary>Pourquoi le ciel est bleu?</summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details className="details3">
          <summary>Pourquoi faut-il être éco responsable?</summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details className="details4">
          <summary>
            Je n'ai pas de smarpthone mais je souhaite faire don de mon oiseau.
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details className="details5">
          <summary>
            Je n'ai pas de smarpthone mais je souhaite faire don de ma voiture.
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details>
        <details className="details6">
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

import Faq from "../assets/Faq/FAQ.svg";

function FaqList() {
  return (
    <div className="faqContainer">
      <img className="faqImg" src={Faq} alt="Faq" />
      <h1>Répondons à vos questions!</h1>
      <div className="detailsContainer">
        <details className="details1">
          <summary>
            Comment puis-je obtenir une estimation de revente suite à un don de
            smartphones?
          </summary>
          <p>Pour obtenir une estimation, suivez ces étapes :</p>
          <ol>
            <li>
              Connectez-vous à votre profil bénévole, vous serez ensuite
              automatiquement redirigé vers le calculator
            </li>
            <li>
              Sélectionnez ensuite la marque, le modèle, l'OS, la RAM, le
              stockage ainsi que l'état du smartphone
            </li>
            <li>Cliquez ensuite sur "Evaluer".</li>
            <li>
              Vous obtiendrez ensuite un prix conseillé de revente ainsi que la
              catégorie du produit.
            </li>
          </ol>
        </details>
        <details className="details2">
          <summary>
            Comment puis-je ajouter un smartphone reconditionné dans la base de
            données ?
          </summary>
          <p>
            Pour ajouter un smartphone reconditionné dans la base de données,
            suivez ces étapes :
          </p>
          <ol>
            <li>Connectez-vous à votre compte administrateur ou bénévole.</li>
            <li>Naviguez vers la section "Produits en stock".</li>
            <li>Cliquez sur le bouton "Ajouter un produit".</li>
            <li>
              Renseignez les informations requises, telles que la marque, le
              modèle, l'état, etc.
            </li>
            <li>Téléchargez une image du smartphone.</li>
            <li>
              Cliquez sur le bouton "Enregistrer" pour ajouter le smartphone à
              la base de données.
            </li>
          </ol>
        </details>
        <details className="details3">
          <summary>
            Comment puis-je ajouter un utilisateur pour consulter ou gérer la
            base de données ?
          </summary>
          <p>
            Pour ajouter un utilisateur dans la base de données, suivez ces
            étapes :
          </p>
          <ol>
            <li>
              Connectez-vous à votre compte administrateur. Vous serez
              automatiquement redirigé dans votre dashboard
            </li>
            <li>Naviguez vers la section "Membres".</li>
            <li>Cliquez sur le bouton "Ajouter un utilisateur".</li>
            <li>
              Renseignez les informations requises, telles que le rôle (bénévole
              ou administrateur), le nom, prénom, email et mot de passe
              provisoire de l'utilisateur nouvellement créé.
            </li>
            <li>Cliquez ensuite sur "Ajouter l'utilisateur"</li>
            <li>
              Le nouvel utilisateur recevra un mot de passe provisoire sur sa
              boîte mail qui sera valable 1h. Celui-ci devra le changer à sa
              première connexion.
            </li>
          </ol>
        </details>
        <details className="details4">
          <summary>
            Comment puis-je modifier/supprimer un utilisateur de la base de
            données?
          </summary>
          <p>
            Pour modifier un utilisateur dans la base de données, suivez ces
            étapes :
          </p>
          <ol>
            <li>
              Connectez-vous à votre compte administrateur. Vous serez
              automatiquement redirigé dans votre dashboard
            </li>
            <li>Naviguez vers la section "Membres".</li>
            <li>La liste des utilisateurs apparait sous forme de tableau</li>
            <li>
              Sélectionnez l'oeil situé sur l'utilisateur que vous voulez
              modifier
            </li>
            <li>
              Une fenêtre apparait vous permettant ensuite de changer son rôle,
              modifier ses informations d'identifications, réinitialiser son mot
              de passe ainsi qu'effectuer la suppression de son compte.{" "}
            </li>
          </ol>
        </details>
        <details className="details5">
          <summary>
            Comment puis-je ajouter une référence de smartphones dans la base de
            données?
          </summary>
          <p>
            Pour ajouter une référence de smartphones dans la base de données,
            suivez ces étapes :
          </p>
          <ol>
            <li>
              Connectez-vous à votre compte administrateur. Vous serez
              automatiquement redirigé dans votre dashboard.
            </li>
            <li>Naviguez vers la section "Références".</li>
            <li>Cliquez sur le bouton "Ajouter une référence".</li>
            <li>
              Vous pouvez ensuite compléter les champs demandés. Votre
              smartphone sera ensuite ajouté en référence.
            </li>
          </ol>
        </details>
        {/* <details className="details6">
          <summary>
            J'ai un PC à 5000€ mais puis-je avoir un smartphone gratuit?
          </summary>
          <p>Here are some additional details that you can toggle.</p>
        </details> */}
      </div>
    </div>
  );
}

export default FaqList;

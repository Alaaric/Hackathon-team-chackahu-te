import { PropTypes } from "prop-types";
import image from "../assets/galaxyNote10.jpg";

function ModalProduct({ product, closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close-btn">
          <button type="button" onClick={() => closeModal(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h1>{product.model}</h1>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <div>
          <p>{product.description}</p>
          <ul>
            <li>system: {product.OS}</li>
            <li>stockage: {product.storage}</li>
            <li>mémoire: {product.RAM}</li>
            <li>réseau: {product.network}</li>
            <li>couleur: {product.color}</li>
            <li>état: {product.state}</li>
          </ul>
          <p>catégorie{product.category}</p>
        </div>
      </div>
    </div>
  );
}
ModalProduct.propTypes = {
  product: PropTypes.shape().isRequired,
  closeModal: PropTypes.bool.isRequired,
};

export default ModalProduct;

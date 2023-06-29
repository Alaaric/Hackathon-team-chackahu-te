import { PropTypes } from "prop-types";

function ModalProduct({ product, closeModal }) {
  let statusColors = {
    color: "#00274379",
  };
  if (product.category === "A") {
    statusColors = {
      color: "#00274379",
    };
  }
  if (product.category === "B") {
    statusColors = {
      color: "#00274379",
    };
  }
  if (product.category === "C") {
    statusColors = {
      color: "#00274379",
    };
  }
  if (product.category === "HC") {
    statusColors = {
      background: "#00274379",
      color: "yellow",
    };
  }
  if (product.category === "Premium") {
    statusColors = {
      color: "red",
    };
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close-btn">
          <button type="button" onClick={() => closeModal(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <div className="product-info-container">
          <div className="container-title-img">
            <div className="title">
              <h1>{product.model}</h1>
            </div>
            <div className="image-container">
              <img src={`../src/${product.photo}`} alt="" />
            </div>
          </div>
          <div className="description-modal-container">
            <p>{product.description}</p>
            <ul>
              <li>
                <span>system:</span> {product.OS}
              </li>
              <li>
                <span>stockage:</span> {product.storage}
              </li>
              <li>
                <span>mémoire:</span> {product.RAM}
              </li>
              <li>
                <span>ecran:</span> {product.screen_size} "
              </li>
              <li>
                <span>réseau:</span> {product.network}
              </li>
              <li>
                <span>couleur:</span> {product.color}
              </li>
              <li>
                <span>état:</span> {product.state}
              </li>
            </ul>
          </div>
        </div>
        <div className="category-container">
          <p>catégorie</p>
          <div style={statusColors} className="indice-container">
            <p>{product.category}</p>
          </div>
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

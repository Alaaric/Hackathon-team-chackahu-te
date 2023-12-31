import { PropTypes } from "prop-types";

export default function CardProduct({ setValueModal, openModal, product }) {
  console.info(product);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="card-product-container"
      onClick={() => {
        openModal(true);
        setValueModal(product);
      }}
    >
      <div className="image-container">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${product.photo}`}
          alt="pic tel"
        />
      </div>
      <div className="informations-container">
        <div className="description-container">
          <h1>{product.model}</h1>
        </div>
        <div className="price-container">
          <p>{product.price} €</p>
        </div>
      </div>
    </div>
  );
}
CardProduct.propTypes = {
  product: PropTypes.shape().isRequired,
  setValueModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

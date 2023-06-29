import { PropTypes } from "prop-types";
import image from "../../../backend/public/assets/images/galaxyNote10.jpg";

export default function CardProduct({ product }) {
  return (
    <div className="card-product-container">
      <div className="image-container">
        <img src={image} alt="pic tel" />
      </div>
      <div className="informations-container">
        <div className="description-container">
          <h1>{product.model}</h1>
          <p>{product.description}</p>
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
};

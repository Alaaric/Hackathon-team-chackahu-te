import image from "../../../backend/public/assets/images/galaxyNote10.jpg";

export default function CardProduct() {
  //   console.info(product);
  return (
    <div className="card-product-container">
      <div className="image-container">
        <img src={image} alt="pic tel" />
      </div>
      <div className="description-container">
        <h1>produit</h1>
        <p>description</p>
      </div>
      <div className="price-container">
        <p>price</p>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function StockProductsList({ tab }) {
  const [stockProducts, setStockProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products/`)
      .then((res) => setStockProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={tab === 3 ? "display" : "hide"}>
      <button type="button">Ajouter un produit</button>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Categorie</th>
            <th>Etat</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {stockProducts &&
            stockProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${product.photo}`}
                    alt="phone"
                  />
                  {product.brand_id}
                </td>
                <td>{product.model}</td>
                <td>{product.category}</td>
                <td>{product.state}</td>
                <td>{product.price}€</td>
                <td>
                  <img src="../src/assets/view.png" alt="view" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

StockProductsList.propTypes = {
  tab: PropTypes.number.isRequired,
};

export default StockProductsList;

import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function RefProductsList({ tab }) {
  const [refProducts, setRefProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ref_products/`)
      .then((res) => {
        setRefProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={tab === 2 ? "display" : "hide"}>
      <button type="button">Ajouter une référence</button>
      <table>
        <tr>
          <th>Marque</th>
          <th>Modèle</th>
          <th>OS</th>
          <th>RAM</th>
          <th>stockage</th>
        </tr>
        {refProducts &&
          refProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${product.image}`}
                  alt={`${product.brand} ${product.model}`}
                />
                {product.brand}
              </td>
              <td>{product.model}</td>
              <td>{product.OS}</td>
              <td>{product.RAM}</td>
              <td>{product.storage}</td>
              <td />
              <td>
                <img src="../src/assets/view.png" alt="view" />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

RefProductsList.propTypes = {
  tab: PropTypes.number.isRequired,
};

export default RefProductsList;

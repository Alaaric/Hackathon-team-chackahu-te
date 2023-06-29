import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function StockProductsList({ tab }) {
  const [stockProducts, setStockProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [row, setRow] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products/`)
      .then((res) => setStockProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={tab === 3 ? "display" : "hide"}>
      <button type="button" onClick={() => setModal(!modal)}>
        Ajouter un produit
      </button>
      <table>
        <thead>
          <tr>
            <th> </th>
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
              <tr
                key={product.id}
                className={row === product.id ? "open" : "close"}
              >
                <td>
                  <img
                    src={`../src/${product.photo}`}
                    alt="phone"
                    style={{ width: "45px" }}
                  />
                </td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>{product.category}</td>
                <td>{product.state}</td>
                <td>{product.price}€</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setRow(product.id);
                      setToggle(!toggle);
                    }}
                  >
                    <img src="../src/assets/view.png" alt="view" />
                  </button>
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

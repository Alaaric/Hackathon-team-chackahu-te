import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function StockProductsList({ tab }) {
  const [stockProducts, setStockProducts] = useState([]);
  const [row, setRow] = useState(0);
  const [previousRow, setPreviousRow] = useState(0);
  const [productDel, setProductDel] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products/`)
      .then((res) => setStockProducts(res.data))
      .catch((err) => console.error(err));
  }, [productDel]);

  return (
    <div className={tab === 3 ? "display" : "hide"}>
      <button type="button" className="addBtn">
        <Link to="/admin/calculator" className="calculatorLink">
          Ajouter un produit
        </Link>
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
              <>
                <tr key={product.id}>
                  <td>
                    <img
                      src={`../src/assets/${product.photo}`}
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
                      className="viewBtn"
                      onClick={() => {
                        if (row === product.id && previousRow === row) {
                          setPreviousRow(0);
                        } else {
                          setPreviousRow(row);
                          setRow(product.id);
                        }
                      }}
                    >
                      <img src="../src/assets/view.png" alt="view" />
                    </button>
                  </td>
                </tr>
                <tr
                  key={product.model[0]}
                  className={
                    row === product.id && previousRow !== row ? "open" : "fold"
                  }
                >
                  <td colSpan="7">
                    <div className="wrapper">
                      <img
                        src={`../src/assets/${product.photo}`}
                        alt="phone"
                        style={{ width: "280px" }}
                      />
                      <div className="moreInfo">
                        <h3>Couleur :</h3>
                        <p>{product.color}</p>
                        <h3>RAM :</h3>
                        <p>{product.RAM}G</p>
                        <h3>Stockage :</h3>
                        <p>{product.storage}G</p>
                        <h3>Localisation :</h3>
                        <p>{product.location}</p>
                        <h3>Ajouté par :</h3>
                        <p>
                          {product.firstname} {product.lastname}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="deleteBtn"
                        onClick={() => {
                          axios
                            .delete(
                              `${
                                import.meta.env.VITE_BACKEND_URL
                              }/stock_products/${product.id}`
                            )
                            .then(() => {
                              setProductDel(!productDel);
                            })
                            .catch((err) => console.error(err));
                        }}
                      >
                        Supprimer le produit
                      </button>
                    </div>
                  </td>
                </tr>
              </>
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

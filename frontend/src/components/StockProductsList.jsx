import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AddProduct from "./AddProduct";

function StockProductsList({ tab }) {
  const [stockProducts, setStockProducts] = useState([]);
  const [row, setRow] = useState(0);
  const [previousRow, setPreviousRow] = useState(0);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productDel, setProductDel] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products/`)
      .then((res) => setStockProducts(res.data))
      .catch((err) => console.error(err));
  }, [showAddProduct, productDel]);

  return (
    <div className={tab === 3 ? "display" : "hide"}>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      <button type="button" onClick={() => setShowAddProduct(true)}>
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
              <>
                <tr key={product.id}>
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
                        setPreviousRow(row);
                        setRow(product.id);
                      }}
                    >
                      <img src="../src/assets/view.png" alt="view" />
                    </button>
                  </td>
                </tr>
                <tr
                  className={
                    row === product.id && previousRow !== row
                      ? "open"
                      : ("fold", setPreviousRow(0))
                  }
                >
                  <td colSpan="7">
                    <div className="wrapper">
                      <img
                        src={`../src/${product.photo}`}
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
                        onClick={(req, res) => {
                          axios
                            .delete(
                              `${
                                import.meta.env.VITE_BACKEND_URL
                              }/stock_products/${product.id}`
                            )
                            .then((result) => {
                              res.sendStatus(204);
                              console.info(result);
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

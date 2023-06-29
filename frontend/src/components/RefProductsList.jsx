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
        <thead>
          <tr>
            <th> </th>
            <th>Marque</th>
            <th>Modèle</th>
            <th>OS</th>
            <th>RAM</th>
            <th>stockage</th>
          </tr>
        </thead>
        <tbody>
          {refProducts &&
            refProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={`../src${product.image}`}
                    alt="phone"
                    style={{ width: "45px" }}
                  />
                </td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td className="os">
                  {product.os === "iOs" ? (
                    <img
                      src="../src/assets/apple.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                  ) : (
                    <img
                      src="../src/assets/android.png"
                      alt=""
                      style={{ width: "45px" }}
                    />
                  )}
                </td>
                <td>{product.RAM}G</td>
                <td>{product.storage}G</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

RefProductsList.propTypes = {
  tab: PropTypes.number.isRequired,
};

export default RefProductsList;

import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import inputValidationRules from "../services/inputValidationRules";

export default function AddProduct({ setShowAddProduct }) {
  const [targetValues, setTargetValues] = useState({
    Brand: "",
    Model: "",
    RAM: "",
    storage: "",
  });

  const update = (event) => {
    const target = event.currentTarget;

    setTargetValues({
      ...targetValues,
      [target.name]: target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();

    const isValidForm = Object.values(inputValidationRules(targetValues)).every(
      (key) => key
    );

    if (isValidForm) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/stock_products`, {
          user_id: targetValues.firstName, // how to get admin id ??
          creation_date: new Date().toJSON().slice(0, 19),
          color: targetValues.color,
          brand: targetValues.brand,
          model: targetValues.model,
          os: targetValues.os,
          RAM: targetValues.RAM,
          storage: targetValues.storage,
          state: targetValues.state,
          category: targetValues.category,
          accessories: targetValues.accessories,
          photo: targetValues.photo,
          price: targetValues.price,
          location: targetValues.location,
        })
        .then((response) => {
          if (response.insertId != null) response.sensStatus(201);
        })
        .catch((err) => console.error(err));
    } else {
      console.info("Error creating product");
    }
    event.target.reset();
  };

  return (
    <div className="modalBackground">
      <form className="add-product" onSubmit={submit}>
        <button
          type="button"
          className="close"
          onClick={() => setShowAddProduct(false)}
        >
          {" "}
          X{" "}
        </button>
        <h2>Ajout de Produit</h2>
        <div className="wrapper">
          <div className="left-container">
            <div className="input-fields">
              <label htmlFor="brand">Marque</label>
              <select
                value={targetValues.brand}
                name="marque"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Samsung</option>
                <option value="2">Apple</option>
                <option value="3">Xiaomi</option>
                <option value="4">Huawei</option>
              </select>
            </div>
            <div className="input-fields name-inputs-container">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                name="model"
                placeholder="Insérez le model"
                onChange={update}
                required
              />
            </div>
            <div className="input-fields">
              <label htmlFor="color" className="input-fields">
                Couleur{" "}
              </label>
              <input
                type="text"
                name="color"
                placeholder="Blanc"
                onChange={update}
                required
              />
            </div>

            <div className="input-fields">
              <label htmlFor="os">OS</label>
              <select
                id="os"
                value={targetValues.brand}
                name="os"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Android</option>
                <option value="2">iOs</option>
              </select>
            </div>

            <div className="input-fields">
              <label htmlFor="RAM">RAM</label>
              <select
                id="RAM"
                value={targetValues.RAM}
                name="RAM"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">1G</option>
                <option value="2">2G</option>
                <option value="3">3G</option>
                <option value="4">4G</option>
                <option value="5">8G</option>
                <option value="6">12G</option>
                <option value="7">16G</option>
              </select>
            </div>

            <div className="input-fields">
              <label htmlFor="storage">Stockage</label>
              <select
                id="storage"
                value={targetValues.storage}
                name="storage"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">16G</option>
                <option value="2">32G</option>
                <option value="3">64G</option>
                <option value="4">128G</option>
                <option value="5">256G</option>
                <option value="6">512G</option>
                <option value="7">1T</option>
              </select>
            </div>
          </div>

          <div className="right-container">
            <div className="input-fields">
              <label htmlFor="state">Etat</label>
              <select
                id="state"
                value={targetValues.state}
                name="state"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Bon état</option>
                <option value="2">Très bon état</option>
                <option value="3">Parfaite état</option>
              </select>
            </div>

            <div className="input-fields">
              <label htmlFor="category">Categorie</label>
              <select
                id="category"
                value={targetValues.category}
                name="category"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Premium</option>
                <option value="2">A</option>
                <option value="3">B</option>
                <option value="4">C</option>
                <option value="5">HC</option>
              </select>
            </div>

            <div className="input-fields">
              <label htmlFor="accessories">Chargeur & cable</label>
              <select
                id="accessories"
                value={targetValues.accessories}
                name="accessories"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Oui</option>
                <option value="2">Non</option>
              </select>
            </div>

            <div className="input-fields">
              <label htmlFor="price" className="price">
                Prix
              </label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="70.00"
                onChange={update}
                required
              />
            </div>

            <div className="input-fields">
              <label htmlFor="location">Localisation</label>
              <select
                id="location"
                value={targetValues.location}
                name="location"
                onChange={update}
                required
              >
                <option value="">-- Select --</option>
                <option value="1">Paris</option>
                <option value="2">Toulouse</option>
                <option value="3">Lyon</option>
                <option value="2">Bordeaux</option>
                <option value="2">Marseille</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit">Ajouter l'utilisateur</button>
      </form>
    </div>
  );
}

AddProduct.propTypes = {
  setShowAddProduct: PropTypes.func.isRequired,
};

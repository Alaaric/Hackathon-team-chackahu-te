import { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import ModalProduct from "../components/ModalProduct";

export default function AllProducts() {
  const [showModal, setShowModal] = useState(false);
  const [valueModal, setValueModal] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [allModels, setAllModels] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");

  // const [modelBox, setModelBox] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products`)
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/brands`)
      .then((res) => setAllBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/models`)
      .then((res) => setAllModels(res.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/locations`)
      .then((res) => setAllLocations(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.info(location);
  return (
    <div className="global-container-products">
      {showModal && (
        <ModalProduct product={valueModal} closeModal={setShowModal} />
      )}

      <div className="filter-container">
        <div className="marque-container">
          <h2>Marque</h2>
          <input
            type="text"
            placeholder="Marque"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {allBrands.map((b) => (
            <div className="checkbox-container" key={b.id}>
              <input type="checkbox" id="brand" name="brand" />
              {b.brand}
            </div>
          ))}
        </div>
        <div className="model-container">
          <h2>Modèle</h2>
          <input
            type="text"
            placeholder="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          {allModels.map((m) => (
            <div className="checkbox-container" key={m.id}>
              <input
                type="checkbox"
                id="model"
                name="model"
                value={m.name}
                // onChange={(e) => setModelBox(e.target.value)}
              />
              {m.name}
            </div>
          ))}
        </div>
        <div className="model-container">
          <h2>Localisation</h2>
          <input
            type="text"
            placeholder="model"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {allLocations.map((l) => (
            <div className="checkbox-container" key={l.id}>
              <input type="checkbox" id="localisation" name="localisation" />
              {l.location}
            </div>
          ))}
        </div>
      </div>
      <div className="allproducts-container">
        {allProducts
          .filter((e) => {
            return (
              e.brand.toLowerCase().includes(brand) &&
              e.model.toLowerCase().includes(model) &&
              e.location.toLowerCase().includes(location)
            );
          })
          .map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              setValueModal={setValueModal}
              openModal={setShowModal}
            />
          ))}
      </div>
    </div>
  );
}

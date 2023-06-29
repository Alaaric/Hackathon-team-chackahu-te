import axios from "axios";
import { useEffect, useState, useContext } from "react";
import determineCategory from "../services/determineCategory";
import UserContext from "../contexts/UserContext";

export default function Calculator() {
  const [ramList, setRamList] = useState([]);
  const [storageList, setStorageList] = useState();
  const [stateList, setStateList] = useState();
  const [categoryList, setCategoryList] = useState();
  const [osList, setOsList] = useState();
  const [brandList, setBrandList] = useState();
  const [modelList, setModelList] = useState();
  const [rams, setRams] = useState();
  const [storages, setStorages] = useState();
  const [states, setStates] = useState();
  const [os, setOs] = useState();
  const [brands, setBrands] = useState();
  const [models, setModels] = useState();
  const [result, setResult] = useState([]);
  const [location, setLocation] = useState();
  const { users } = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/rams`)
      .then((res) => {
        setRamList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/os`)
      .then((res) => {
        setOsList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/storage`)
      .then((res) => {
        setStorageList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/state`)
      .then((res) => {
        setStateList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/brands`)
      .then((res) => {
        setBrandList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/models`)
      .then((res) => {
        setModelList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const HandlePostProduct = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/stock_products`, {
        rams,
        storages,
        states,
        os,
        brands,
        models,
        location,
        price: result[1],
        category: result[0],
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="calculator">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(
            determineCategory(
              models,
              rams,
              storages,
              states,
              modelList,
              ramList,
              storageList,
              stateList,
              categoryList,
              os,
              brands
            )
          );
        }}
      >
        <label htmlFor="os">
          OS:
          <br />
          <select name="os" id="os" onChange={(e) => setOs(e.target.value)}>
            {osList &&
              osList.map((oss) => (
                <option value={oss.id} key={oss.id}>
                  {oss.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="brand">
          Marque:
          <br />
          <select
            name="brand"
            id="brand"
            onChange={(e) => setBrands(e.target.value)}
          >
            {brandList &&
              brandList.map((brand) => (
                <option value={brand.id} key={brand.id}>
                  {brand.brand}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="model">
          Modèle:
          <br />
          <select
            name="model"
            id="model"
            onChange={(e) => setModels(e.target.value)}
          >
            {modelList &&
              modelList.map((model) => (
                <option value={model.id} key={model.id}>
                  {model.name}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="ram">
          RAM:
          <br />
          <select name="ram" id="ram" onChange={(e) => setRams(e.target.value)}>
            {ramList &&
              ramList.map((ram) => (
                <option value={ram.id} key={ram.id}>
                  {ram.value}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="storage">
          Stockage:
          <br />
          <select
            name="storage"
            id="storage"
            onChange={(e) => setStorages(e.target.value)}
          >
            {storageList &&
              storageList.map((storage) => (
                <option value={storage.id} key={storage.id}>
                  {storage.value}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="state">
          État:
          <br />
          <select
            name="state"
            id="state"
            onChange={(e) => setStates(e.target.value)}
          >
            {stateList &&
              stateList.map((state) => (
                <option value={state.id} key={state.id}>
                  {state.state}
                </option>
              ))}
          </select>
        </label>
        {users.role_id === 2 && (
          <label htmlFor="location">
            Lieu:
            <br />
            <select
              name="location"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Paris">Paris</option>
              <option value="Lyon">Lyon</option>
              <option value="Marseille">Marseille</option>
              <option value="Lille">Lille</option>
            </select>
          </label>
        )}
        {users.role_id === 2 && (
          <label htmlFor="color">
            Lieu:
            <br />
            <select
              name="color"
              id="color"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="blue">Bleu</option>
              <option value="pink">Rose</option>
              <option value="gray">Gris</option>
              <option value="red">Rouge</option>
              <option value="black">Noir</option>
              <option value="white">Blanc</option>
            </select>
          </label>
        )}
        {users.role_id === 2 && (
          <label htmlFor="file" className="label-file">
            Choisir une photo
            <input type="file" className="input-file" id="file" />
          </label>
        )}
        <div className="btnGradingAndStockContainer">
          <button className="btnGrading" type="submit">
            {" "}
            évaluer
          </button>
          {users.role_id === 2 && (
            <button
              className="btnAddStock"
              type="button"
              onClick={HandlePostProduct}
            >
              {" "}
              Ajouter au stock
            </button>
          )}
        </div>
      </form>
      {result && (
        <div className="priceCategoryContainer">
          {" "}
          <div className="priceBox">
            <p className="price">Prix conseillé:</p>
            <div className="priceResult">{result[1]}</div>
          </div>
          <div className="categoryBox">
            <p className="category">Catégorie:</p>
            <div className="categoryResult">{result[0]}</div>
          </div>
        </div>
      )}
    </div>
  );
}

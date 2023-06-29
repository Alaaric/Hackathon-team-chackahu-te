import axios from "axios";
import { useEffect, useState } from "react";
import determineCategory from "../services/determineCategory";

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
        <label htmlFor="brand">
          Marque:
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
        <label htmlFor="os">
          OS:
          <select name="os" id="os" onChange={(e) => setOs(e.target.value)}>
            {osList &&
              osList.map((oss) => (
                <option value={oss.id} key={oss.id}>
                  {oss.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="ram">
          RAM:
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
        <button type="submit"> évaluer</button>
      </form>
      {result && (
        <div>
          {" "}
          <p>Prix conseillé: {result[1]}</p>
          <p>Catégorie: {result[0]}</p>{" "}
        </div>
      )}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [ramList, setRamList] = useState([]);
  const [storageList, setStorageList] = useState();
  const [stateList, setStateList] = useState();
  const [categoryList, setCategoryList] = useState();
  const [osList, setOsList] = useState();

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

  return (
    <div className="calculator">
      <form>
        <label htmlFor="model">
          Modèle
          <select name="model" id="model">
            {osList &&
              osList.map((os) => <option value={os.name}>{os.name}</option>)}
          </select>
        </label>
        <label htmlFor="ram">
          RAM
          <select name="ram" id="ram">
            {ramList &&
              ramList.map((ram) => (
                <option value={ram.value}>{ram.value}</option>
              ))}
          </select>
        </label>
        <label htmlFor="storage">
          Stockage
          <select name="storage" id="storage">
            {storageList &&
              storageList.map((storage) => (
                <option value={storage.value}>{storage.value}</option>
              ))}
          </select>
        </label>
        <label htmlFor="state">
          État
          <select name="state" id="state">
            {stateList &&
              stateList.map((state) => (
                <option value={state.state}>{state.state}</option>
              ))}
          </select>
        </label>
        <button type="submit"> évaluer</button>
      </form>
      {categoryList &&
        categoryList.map((category) => <div>{category.category}</div>)}
    </div>
  );
}

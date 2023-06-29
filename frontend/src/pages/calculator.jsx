import axios from "axios";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [refPhones, setRefPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ref_products`)
      .then((res) => {
        setRefPhones(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="calculator">
      <form>
        <label htmlFor="model">
          Modèle
          <select name="model" id="model">
            {refPhones &&
              refPhones.map((phone) => (
                <option value={phone.brand}>{phone.brand}</option>
              ))}
          </select>
        </label>
        <label htmlFor="ram">
          RAM
          <select name="ram" id="ram">
            <option value="">-- Select --</option>
          </select>
        </label>
        <label htmlFor="storage">
          Stockage
          <select name="storage" id="storage">
            <option value="">-- Select --</option>
          </select>
        </label>
        <label htmlFor="state">
          État
          <select name="state" id="state">
            <option value="">-- Select --</option>
          </select>
        </label>
        <button type="submit"> évaluer</button>
      </form>
    </div>
  );
}

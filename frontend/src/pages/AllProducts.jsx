import { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stock_products`)
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="contact">
      {allProducts.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

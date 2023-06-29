import { useState } from "react";
import "../sass/admin.scss";
import UsersList from "../components/UsersList";
import RefProductsList from "../components/RefProductsList";
import StockProductsList from "../components/StockProductsList";

export default function Admin() {
  const [tab, setTab] = useState(1);

  return (
    <div className="admin">
      <ul>
        <li>
          <button type="button" onClick={() => setTab(1)}>
            Membres
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(2)}>
            Références
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTab(3)}>
            Produits en stock
          </button>
        </li>
      </ul>
      <UsersList tab={tab} />
      <RefProductsList tab={tab} />
      <StockProductsList tab={tab} />

      <h1>Admin</h1>
      <AddUser />
      <UpdateUser />
    </div>
  );
}

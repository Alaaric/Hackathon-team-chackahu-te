import UpdateUser from "../components/UpdateUser";
import AddUser from "../components/AddUser";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <AddUser />
      <UpdateUser />
    </div>
  );
}

import UpdateUser from "../components/UpdateUser";
// import AddUser from "../components/AddUser";
import ResetPassword from "../components/ResetPassword";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <ResetPassword />
      <UpdateUser />
    </div>
  );
}

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function WrongPage() {
  const { users } = useContext(UserContext);
  return (
    <div className="404">
      <h1>tyfuhjt{users.firstname}</h1>
    </div>
  );
}

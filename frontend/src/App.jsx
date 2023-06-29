import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import WrongPage from "./pages/WrongPage";
import Admin from "./pages/Admin";
import ResetPassword from "./components/ResetPassword";
import Faq from "./pages/Faq";
import "./styles.scss";
import Calculator from "./pages/calculator";
import AdminProtectedRoutes from "./layouts/AdminProtectedRoutes";
import ProtectedRoute from "./layouts/ProtectedRoute";
import NavLayout from "./layouts/NavLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Login />} />
          <Route path="*" element={<WrongPage />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* LOGGED USER ROUTES */}
          <Route
            path="/connected"
            element={
              <ProtectedRoute>
                <NavLayout />
              </ProtectedRoute>
            }
          >
            <Route path="calculator" element={<Calculator />} />
            <Route path="faq" element={<Faq />} />
          </Route>

          {/* LOGGED ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoutes>
                <NavLayout />
              </AdminProtectedRoutes>
            }
          >
            <Route path="dashboard" element={<Admin />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

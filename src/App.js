import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RequerimentPage from "./components/RequerimentPage";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/requeriments" element={isAuthenticated ? <RequerimentPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

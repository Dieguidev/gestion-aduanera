import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RequerimentPage from "./components/RequerimentPage";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function App() {

  const [authenticated, setAuthenticated] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setAuthenticated={setAuthenticated}/>} />
        <Route path="/requeriments" element={<RequerimentPage authenticated={authenticated}/>} />
      </Routes>
    </BrowserRouter>
    //<LoginPage/>
    // <RequerimentPage/>
  );
}

export default App;

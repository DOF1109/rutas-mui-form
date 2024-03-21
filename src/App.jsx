import Form from "./components/pages/Form/Form";
import Home from "./components/pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

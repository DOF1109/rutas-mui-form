import Form from "./components/pages/Form/Form";
import Home from "./components/pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

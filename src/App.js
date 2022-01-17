import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Teste from "./teste"
import { React } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} component={Home} />
          <Route path="/teste" element={<Teste/>} component={Teste} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from "./pages/Basic/index.jsx";
import BasicScene from "./pages/Basic/01_basic_scene/index.jsx";
import Home from "./pages/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basic" element={<Basic />} />
        <Route path="basic/01_basic_scene" element={<BasicScene />} />
      </Routes>
    </BrowserRouter>
  );
}

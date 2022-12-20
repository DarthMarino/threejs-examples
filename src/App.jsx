import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from "./pages/Basic/index.jsx";
import BasicScene from "./pages/Basic/01_basic_scene/index.jsx";
import BasicTransform from "./pages/Basic/02_basic_transform/index.jsx";
import BasicControls from "./pages/Basic/03_basic_controls/index.jsx";

import Home from "./pages/index.jsx";
import Layout from "./pages/layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basic" element={<Basic />} />
          <Route path="basic/01_basic_scene" element={<BasicScene />} />
          <Route path="basic/02_basic_transform" element={<BasicTransform />} />
          <Route path="basic/03_basic_controls" element={<BasicControls />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

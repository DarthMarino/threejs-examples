import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from "./pages/Basic/index.jsx";
import BasicScene from "./pages/Basic/01_basic_scene/index.jsx";
import BasicTransform from "./pages/Basic/02_basic_transform/index.jsx";
import BasicControls from "./pages/Basic/03_basic_controls/index.jsx";

import Home from "./pages/index.jsx";
import Layout from "./pages/layout.jsx";
import ClassicTechniques from "./pages/ClassicTechniques/index.jsx";
import LightsScene from "./pages/ClassicTechniques/01_lights/index.jsx";
import ControlsScene from "./pages/ClassicTechniques/02_controls/index.jsx";
import Examples from "./pages/Examples/index.jsx";
import PortalScene from "./pages/Examples/01_portal/index.jsx";

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
          <Route path="classic_techniques" element={<ClassicTechniques />} />
          <Route
            path="classic_techniques/01_lights"
            element={<LightsScene />}
          />
          <Route
            path="classic_techniques/02_controls"
            element={<ControlsScene />}
          />
          <Route path="examples" element={<Examples />} />
          <Route path="examples/01_portal" element={<PortalScene />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

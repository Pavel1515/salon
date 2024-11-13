import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Map from "./page/Map";
import Home_taiwan from "./page/Thai";
import Info from "./page/Info";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/recording" element={<Recording />} />
      <Route path="/thai" element={<Home_taiwan/>} />
      <Route path="/info" element={<Info/>} />
    </Routes>
  );
}

export default App;

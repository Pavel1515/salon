import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Recording_English from "./page/Recording-English";
import Map from "./page/Map";
import Home_taiwan from "./page/Thai";
import English from "./page/English";
import Info from "./page/Info";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/recording" element={<Recording />} />
      <Route path="/thai" element={<Home_taiwan/>} />
      <Route path="/english" element={<English />} />
      <Route path="/info" element={<Info/>} />
      <Route path="/recording-en" element={<Recording_English />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Recording_English from "./page/Recording-English";
import Recording_Russian from "./page/Recording-Ru";
import Map from "./page/Map";
import Home_taiwan from "./page/Thai";
import English from "./page/English";
import Info from "./page/Info";
import Russian from "./page/Rus";
import Chine  from "./page/Chine";


function App() {
  return (
    <Routes>
      <Route path="/thai" element={<Home_taiwan />} />
      <Route path="/recording" element={<Recording />} />
      <Route path="/english" element={<English />} />
      <Route path="/recording-en" element={<Recording_English />} />
      <Route path="/russian" element={<Russian />} />
      <Route path="/recording-ru" element={<Recording_Russian />} />
      <Route path="/ch" element={<Chine />} />
      <Route path="/recording-ch" element={<Recording_English />} />
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
   

      <Route path="/info" element={<Info/>} />

    </Routes>
  );
}

export default App;

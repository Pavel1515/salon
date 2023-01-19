import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Map from "./page/Map";
import Layout from "./component/Layout";
import "./style/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/recording" element={<Recording />} />
    </Routes>
  );
}

export default App;

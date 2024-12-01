import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Recording_English from "./page/Recording-English";
import Recording_Russian from "./page/Recording-Ru";
import Recording_Chine from "./page/Recording-Chine";
import Map from "./page/Map";
import Home_taiwan from "./page/Thai";
import English from "./page/English";
import Info from "./page/Info";
import Russian from "./page/Rus";
import Chine  from "./page/Chine";
import Map_ru from "./page/Map-ru";
import Map_Ch from "./page/Map-ch";
import Map_En from "./page/Map-en";
import Jobs from "./page/Jobs";
import Ads from "./page/Ads";
import Video from "./page/Video";
import Err from './page/Err';

function App() {
  return (
    <Routes>
      <Route path="/thai" element={<Home_taiwan />} />
      <Route path="/recording" element={<Recording />} />
      <Route path="/english" element={<English />} />
      <Route path="/recording-en" element={<Recording_English />} />
      <Route path="/russian" element={<Russian />} />
      <Route path="/recording-ru" element={<Recording_Russian />} />
      <Route path="/chinese" element={<Chine />} />
      <Route path="/recording-ch" element={<Recording_Chine />} />
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/map-ru" element={<Map_ru />} />
      <Route path="/map-ch" element={<Map_Ch />} />
      <Route path="/map-en" element={<Map_En />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/info" element={<Info/>} />
      <Route path="/ads" element={<Ads/>} />
      <Route path="/video-ads" element={< Video/>} />
      <Route path="/eror" element={< Err/>} />
    </Routes>
  );
}

export default App;

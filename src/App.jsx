import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recording from "./page/Recording";
import Map from "./page/Map";
import Layout from "./component/Layout";
import "./style/index.scss";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/map"
        element={
          <Layout
            nameOne={"decrease-header"}
            nameTwo={"decrease-img"}
            nameTree={"decrease"}
            vision={true}
          >
            <Map />
          </Layout>
        }
      />
      <Route
        path="/recording"
        element={
          <Layout
            nameOne={"decrease-header"}
            nameTwo={"decrease-img"}
            nameTree={"decrease"}
            vision={true}
          >
            <Recording />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

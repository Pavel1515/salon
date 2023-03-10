import React from "react";
// import "../style/index.css";
import Layout from "../component/Layout";

const Map = () => {
  return (
    <>
      <Layout
        header={"decreaseHeader"}
        image={" decrease-img"}
        position={"decrease"}
        bookanime={"books"}
        menuAnime={"appearanceMenu"}
        animeTiktok={"tiktook"}
        animeFacebook={"facebok"}
      />
      <div className="content">
        <iframe
          title="Map"
          style={{ width: "100%", height: "100%", border: "none" }}
          className="iframe"
          src="https://maps.google.com/maps?hl=en&amp;q=Toronto+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
      </div>
    </>
  );
};

export default Map;

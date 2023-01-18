import React from "react";

import { Link } from "react-router-dom";
import map from "../assets/image/position.svg";


const Home = () => {

  return (
    <div className="cate_wraper">
      <div className="cate"></div>
      <div className="wraper_wellcome">
        <div className="text pt">Wellcome to Katy nails</div>
        <div>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div className="mt">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div className="text mt">With love KT</div>
      </div>
      <div className="footer">
        <Link to={"/map"}>
          WE ARE HERE <img src={map} alt="map" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

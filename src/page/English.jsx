import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-En";

const Thai = () => {
  return (
    <>
      <Header
        url={"/english"}
        header={"exaggerate-header"}
        image={"exaggerate-img"}
        position={"exaggerate"}
        bookanime={"booksanime"}
        menuAnime={"exaggerateMenu"}
        animeTiktok={"exaggerat-tiktook"}
        animeFacebook={"exaggerat-facebok"}
        animeInstagram={"exaggerate-instagram "}
      />
      <div className="content content_mb">
        <div className="black">
          <div className="cate_wraper">
            <div className="wraper_wellcome">
              <div className="text pt">Welcome to KATY beauty!</div>
              <div className="min_text">
                We provide the best services:
                <br />
                Manicure, Pedicure, Eyelash extensions
                <br />
                We guarantee high quality services
                <br />
                and impeccable coverage.
                <br />
                You will definitely find something suitable
                <br />
                from a large palette of colors and designs.
                <br />
                Your nails will be strong and healthy.
                <br />
                Let's create a beauty design together!
              </div>
              <div className="text mt">With love, KATY</div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="info_jobs">
                  <Link to={"/info"}> Info</Link>
                </div>
                <Link to={"/map"}>Map</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thai;

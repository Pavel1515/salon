import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header";

const Thai = () => {
  return (
    <>
      <Header
        url={'/thai'}
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
              <div className="text pt">Welcome to KT nails!</div>
              <div className="min_text">
                We provide the best hardware manicure. <br />
                Our nail artist can guarantee high quality <br /> of services
                and flawless coverage. <br />
                You'll definetly find something <br />
                just right for you in our big palette <br />
                of colors and art designs. <br />
                Each client gets a disposable sterile <br />
                manicure kit <br /> because we really care about your health.
                <br /> We don't use any scissors. <br />
                Therefore you can be sure <br />
                it'll be zero pain and 100% safe. <br />
                Let's create nail beauty design together! <br />
              </div>
              <div  className="text mt">
                With love KT
              </div>
            </div>
            <div className="footer">
              <div className="container">
              <div className="info_jobs">
                  <Link to={"/info"}> ข้อมูล</Link>
                </div>
                <div className="info_jobs">
                  <Link to={"/info"}> รับงาน
                  </Link>
                </div>
                <Link to={"/map"}>เราอยู่ที่นี่
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thai;

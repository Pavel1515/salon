import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";

const Home = () => {
  return (
    <>
      <Layout
        header={"exaggerate-header"}
        image={"exaggerate-img"}
        position={"exaggerate"}
        bookanime={"booksanime"}
        menuAnime={"exaggerateMenu"}
        animeTiktok={"exaggerat-tiktook"}
        animeFacebook={"exaggerat-facebok"}
      />
      <div
        className="content content_mb"
      >
        <div className="black">
          <div className="cate_wraper">
            <div className="wraper_wellcome">
              <div className="text pt">Welcome to Katy's nails!</div>
              <div className="min_text">
                We provide the best hardware manicure. <br />
                Our nail artist can guarantee high <br />
                quality of services and flawless coverage. <br />
                You'll definetly find something just <br />
                right for you in our big palette <br />
                of colors and art designs. <br />
                Each client gets a disposable sterile manicure <br />
                kit because we really care about <br />
                your health. We don't use any scissors. <br />
                Therefore you can be sure it'll be zero <br />
                pain and 100% safe. <br />
                Let's create nail beauty design together! <br />
              </div>
              <div style={{ textAlign: "left" }} className="text mt">
                With love KT
              </div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="info_jobs">
                  INFO/JOBS
                  <ul className="icons">
                    <li className="one"></li>
                    <li className="two"></li>
                    <li className="tree"></li>
                  </ul>
                </div>
                <Link to={"/map"}>WE ARE HERE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

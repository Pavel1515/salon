import React from "react";
import "../style/index.css";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";

const Home = () => {
  return (
    <>
      <Layout
        nameOne={"exaggerate-header"}
        nameTwo={"exaggerate-img"}
        nameTree={"exaggerate"}
        vision={true}
        book={true}
        nameFoo={"exaggerate-lies"}
        bookanime={"booksanime"}
        menuAnime={"exaggerateMenu"}
      />
      <div className="content content_mb">
        <div className="black">
          <div className="cate_wraper">
            <div className="wraper_wellcome">
              <div className="text pt">Wellcome to Katy nails</div>
              <div className="min_text">
                Here we are provide the Best quality of nails <br /> services.
                <br /> Join us and make sure of benefits of hardware <br />
                manicure - without using scissors. <br />
                (safety, painless, sterile)
                <br /> Care about your health.
                <br />
                For each client, we have prepared a set of
                <br /> sterile and disposable consumable.
                <br /> Ensuring an even, beautiful nail coverage. <br />
                Big palette of colors and art designs.
                <br /> Let's create nails beauty design together !
              </div>
              <div style={{ textAlign: "left" }} className="text mt">
                With love KT
              </div>
            </div>
            <div className="footer">
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
    </>
  );
};

export default Home;

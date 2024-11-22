import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-En";
import text from "../assets/image/text/thay/BOOK-Thai.svg";

const English = () => {
  return (
    <>
      <div className="home-thai">
        <Header
          url={"/english"}
          header={"exaggerate-header"}
          image={"exaggerate-img"}
          position={"exaggerate"}
          bookanime={"booksanime"}
          menuAnime={"exaggerateMenu"}
          animeTiktok={"exaggerat-tiktook"}
          animeFacebook={"exaggerat-facebok"}
          animeInstagram={"exaggerate-instagram"}
        />
        <div className="custom-content-thai">
          <img src={text} alt="wellcome" />
          <div className="custom-footer">
       
            <div className="custom-info-jobs">
              <Link
                to={"/info"}
                className="adjustable-text arial"
                style={{ fontSize: `16px` }}
              >
                Info
              </Link>
            </div>
            <Link
              to={"/map-en"}
              className="adjustable-text arial"
              style={{ fontSize: `16px` }}
            >
              Map
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default English;

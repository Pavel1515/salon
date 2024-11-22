import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Ru";
import text from "../assets/image/text/thay/BOOK-Thai.svg";

const English = () => {
  return (
    <>
      <div className="home-thai">
        <Header
          url={"/russian"}
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
            <div
              className="adjustable-text info-button"
              style={{ fontSize: `18px` }}
            >
              ข้อมูล
            </div>
            <div className="custom-info-jobs">
              <Link
                to={"/info"}
                className="adjustable-text"
                style={{ fontSize: `18px` }}
              >
                รับงานกับเรา
              </Link>
            </div>
            <Link
              to={"/map"}
              className="adjustable-text"
              style={{ fontSize: `18px` }}
            >
              เราอยู่ที่น
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default English;

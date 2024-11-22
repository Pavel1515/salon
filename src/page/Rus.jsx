import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Ru";
import text from "../assets/image/text/thay/xBOOKThai.svg";

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
            <div className="custom-info-jobs">
              <Link
                to={"/info"}
                className="adjustable-text arial"
                style={{ fontSize: `16px` }}
              >
                Информация
              </Link>
            </div>
            <Link
              to={"/map-ru"}
              className="adjustable-text arial"
              style={{ fontSize: `16px` }}
            >
           Мы здесь
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default English;

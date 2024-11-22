import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Ch";
import text from "../assets/image/text/ch/GenegalChinese.svg";

const English = () => {
  return (
    <>
      <div className="home-thai">
        <Header
          url={"/recording-ch"}
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
              <div   className="adjustable-text arial"
                style={{ fontSize: `16px` ,color:"#fff"}}>
              我们在这里
              </div>
          
            </div>
            <Link
              to={"/map-ch"}
              className="adjustable-text arial"
              style={{ fontSize: `16px` }}
            >
             信息
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default English;

import React, { useEffect, useState } from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Thai";
import text from "../assets/image/text/thay/GenegalThai.svg";

// Основной компонент Thai, который также включает в себя логику изменения размера шрифтов в зависимости от высоты экрана
const Thai = () => {
  return (
    <div className="home-thai">
      <Header
        url={"/thai"}
        header={"exaggerate-header"}
        image={"exaggerate-img"}
        position={"exaggerate"}
        bookanime={"booksanime"}
        menuAnime={"exaggerateMenu"}
        animeTiktok={"exaggerat-tiktook"}
        animeFacebook={"exaggerat-facebok"}
        animeInstagram={"exaggerate-instagram"}
      />
      <div style={{paddingBottom:"45px"}} className="custom-content-thai ">
        <img src={text} alt="wellcome" />
        <div className="custom-footer">
          <div className="custom-info-jobs">
          <div   className="adjustable-text thub"
                style={{ fontSize: `18px` ,color:"#fff"}}>
              ข้อมูล

            </div>
          </div>
          <Link
            to={"/jobs"}
            className="adjustable-text"
            style={{ fontSize: `18px` }}
          >
            รับงานกับเรา

          </Link>
          <Link
            to={"/map"}
            className="adjustable-text"
            style={{ fontSize: `18px` }}
          >
            เราอยู่ที่นี่

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thai;

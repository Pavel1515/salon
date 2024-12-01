import React, { useEffect, useState } from 'react';
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Ru";
import text from "../assets/image/text/ru/GenegalRussian.svg";

function Err() {
  const [fontSize, setFontSize] = useState(400);

  const resizeText = () => {
    const containerWidth = window.innerWidth * 0.8; // 80% от ширины окна
    const containerHeight = window.innerHeight * 0.8; // 80% от высоты окна
    const totalTextHeight = document.getElementById('leftText').scrollHeight + document.getElementById('final').scrollHeight;
    
    const newFontSize = Math.min(containerWidth / document.getElementById('leftText').scrollWidth * 400, containerHeight / totalTextHeight * 400);
    setFontSize(newFontSize);
  };

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, []);

  return (
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
    <div style={{color:'#fffff'}} className="text-container">
      <div className="text" id="welcome" style={{ fontSize: `${fontSize}%` }}>
        Добро пожаловать в КАТY beauty!
      </div>

      <div className="empty"></div>

      <div className="text left-align" id="leftText" style={{ fontSize: `${fontSize}%` }}>
        Мы предоставляем услуги:<br />
        Маникюр, Педикюр, Наращивание ресниц.<br />
        Мы гарантируем высокое качество услуг.<br />
        Вы обязательно найдете что-то подходящее<br />
        для себя, в нашей большой палитре цветов<br />
        и художественных дизайнов.<br />
        Ваши ногти и ресницы<br />
        будут крепкими и здоровыми.<br />
        Давайте создадим бьюти-дизайн вместе!
      </div>

      <div className="empty"></div>

      <div className="text" id="final" style={{ fontSize: `${fontSize}%` }}>
        С любовью КАТҮ
      </div>
      </div>
    </div>
  );
}

export default Err;

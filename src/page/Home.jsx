import React, { useRef, useState, useEffect } from "react";
import "../style/index.scss";
import { useNavigate } from "react-router-dom";
import english from "../assets/image/flags/gb.svg";
import thai from "../assets/image/flags/th.svg";
import russian from "../assets/image/flags/ru.svg";
import chinese from "../assets/image/flags/cn.svg";

const Home = () => {
  const svgFiles = require.context('../assets/image/animate', false, /\.(svg)$/).keys().map(fileName => require(`../assets/image/animate/${fileName.replace('./', '')}`));
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Состояние для выбранного языка
  const [isPlaying, setIsPlaying] = useState(false); // Состояние для управления анимацией

  // Используем SVG анимацию вместо видео
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 < svgFiles.length) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            setIsPlaying(false); // Останавливаем анимацию, когда все кадры проиграны
            return prevIndex;
          }
        });
      }, 40); 
    }
    return () => clearInterval(interval);
  }, [isPlaying, svgFiles.length]);


  const handleLinkClick = (path, language) => {
    setSelectedLanguage(language); 
    setCurrentIndex(0); 
    setIsPlaying(true); 
    setTimeout(() => {
      navigate(path); 
    }, svgFiles.length * 100); 
  };

  return (
    <>
      <div className="home">
        <div className="svg-animation-container" >
          <img
            src={svgFiles[currentIndex]}
            alt="SVG Animation"
            style={{ width: 'auto', height: '182px', display: 'block',}}
          />
        </div>
        <div className="container_buttons">
          <span className={`font_english ${selectedLanguage && selectedLanguage !== 'english' ? 'hidden' : ''}`}>
            <button
              onClick={() => handleLinkClick("/english", "english")}
              className={`link-button`}
            >
              <img src={english} alt="en" />
            </button>
          </span>
          <button
            onClick={() => handleLinkClick("/thai", "thai")}
            className={`link-button ${selectedLanguage && selectedLanguage !== 'thai' ? 'hidden' : ''}`}
          >
            <img src={thai} alt="th" />
          </button>
          <span className={`font_english ${selectedLanguage && selectedLanguage !== 'russian' ? 'hidden' : ''}`}>
            <button
              onClick={() => handleLinkClick("/russian", "russian")}
              className={`link-button`}
            >
              <img src={russian} alt="ru" />
            </button>
          </span>
          <button
            onClick={() => handleLinkClick("/chinese", "chinese")}
            className={`link-button ${selectedLanguage && selectedLanguage !== 'chinese' ? 'hidden' : ''}`}
          >
            <img src={chinese} alt="china" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
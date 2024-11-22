import React, { useState } from "react";
import "../style/index.scss";
import english from "../assets/image/flags/gb.svg";
import thai from "../assets/image/flags/th.svg";
import russian from "../assets/image/flags/ru.svg";
import chinese from "../assets/image/flags/cn.svg";
import { useNavigate } from "react-router-dom";
import LottiePlayer from "react-lottie-player";
import opacity from "../assets/opacity.json";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Состояние для выбранного языка
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false); // Состояние для запуска анимации
  const [fadeOutFlag, setFadeOutFlag] = useState(false); // Состояние для эффекта затухания
  const navigate = useNavigate();

  const handleFlagClick = (language, path) => {
    setSelectedLanguage(language);
    setIsAnimationPlaying(true);
    setFadeOutFlag(true); // Start fade-out effect
    setTimeout(() => setIsAnimationPlaying(false), 2000);
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  return (
    <div className="home">
      <div
        style={{
          width: "100%",
          height: "50%",
          maxHeight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="svg-animation-container"
      >
        <LottiePlayer
          animationData={opacity}
          play={isAnimationPlaying}
          loop={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div style={{ width: "100%", height: "50%" }} className="container_buttons">
        {(!selectedLanguage || selectedLanguage === "english") && (
          <span className="font_english">
            <button
              className={`link-button ${fadeOutFlag ? "fade-out" : ""}`}
              onClick={() => handleFlagClick("english", "/english")}
            >
              <img src={english} alt="en" />
            </button>
          </span>
        )}
        {(!selectedLanguage || selectedLanguage === "thai") && (
          <button
            className={`link-button ${fadeOutFlag ? "fade-out" : ""}`}
            onClick={() => handleFlagClick("thai", "/thai")}
          >
            <img src={thai} alt="th" />
          </button>
        )}
        {(!selectedLanguage || selectedLanguage === "russian") && (
          <span className="font_english">
            <button
              className={`link-button ${fadeOutFlag ? "fade-out" : ""}`}
              onClick={() => handleFlagClick("russian", "/russian")}
            >
              <img src={russian} alt="ru" />
            </button>
          </span>
        )}
        {(!selectedLanguage || selectedLanguage === "chinese") && (
          <button
            className={`link-button ${fadeOutFlag ? "fade-out" : ""}`}
            onClick={() => handleFlagClick("chinese", "/chinese")}
          >
            <img src={chinese} alt="china" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

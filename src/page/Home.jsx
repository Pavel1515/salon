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
  const navigate = useNavigate();

  const handleFlagClick = (language, path) => {
    setSelectedLanguage(language);
    setIsAnimationPlaying(true);
    setTimeout(() => setIsAnimationPlaying(false), 2000);

    // Ожидаем завершения анимации, а затем перенаправляем на нужную страницу
    setTimeout(() => {
      navigate(path);
    }, 2000); // Задержка в 2000 мс (время зависит от длительности анимации)
  };

  return (
    <>
      <div className="home">
        <div
          style={{ width: "100%", height: "50%", maxHeight: "50%" ,display: "flex", justifyContent: "center", alignItems: "center"}}
          className="svg-animation-container"
        >
          <LottiePlayer
            animationData={opacity}
            play={isAnimationPlaying}
            loop={false}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </div>
        <div style={{ width: "100%", height: "50%" }} className="container_buttons">
          {(!selectedLanguage || selectedLanguage === "english") && (
            <span className="font_english">
              <button
                className={`link-button`}
                onClick={() => handleFlagClick("english", "/")}
              >
                <img src={english} alt="en" />
              </button>
            </span>
          )}
          {(!selectedLanguage || selectedLanguage === "thai") && (
            <button
              className={`link-button`}
              onClick={() => handleFlagClick("thai", "/thai")}
            >
              <img src={thai} alt="th" />
            </button>
          )}
          {(!selectedLanguage || selectedLanguage === "russian") && (
            <span className="font_english">
              <button
                className={`link-button`}
                onClick={() => handleFlagClick("russian", "/russian")}
              >
                <img src={russian} alt="ru" />
              </button>
            </span>
          )}
          {(!selectedLanguage || selectedLanguage === "chinese") && (
            <button
              className={`link-button`}
              onClick={() => handleFlagClick("chinese", "/chinese")}
            >
              <img src={chinese} alt="china" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

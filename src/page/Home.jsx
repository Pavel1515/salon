import React, { useRef, useState } from "react";
import "../style/index.scss";
import { useNavigate } from "react-router-dom";
import videoFile from "../assets/video/video.mp4";
import english from "../assets/image/flags/english.jpg";
import thai from "../assets/image/flags/taiwan.jpg";
import russian from "../assets/image/flags/ru.jpg";
import chinese from "../assets/image/flags/china.jpg";  

const Home = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Состояние для выбранного языка

  // Функция для воспроизведения видео и перехода
  const handleLinkClick = (path, language) => {
    setSelectedLanguage(language); // Устанавливаем выбранный язык

    if (videoRef.current) {
      videoRef.current.play(); // Проигрываем видео

      // Устанавливаем таймер для перехода после окончания видео
      videoRef.current.onended = () => {
        navigate(path); // Переход по указанному пути после завершения видео
      };
    }
  };

  return (
    <>
      <div className="home">
        <div className="video">
          <video
            ref={videoRef}
            width="320"
            height="240"
            src={videoFile}
            type="video/mp4"
            playsInline // Добавлено чтобы отключить полноэкранный режим на iPhone
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
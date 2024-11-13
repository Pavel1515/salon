import React, { useRef } from "react";
import "../style/index.scss";
import { useNavigate } from "react-router-dom";
import videoFile from "../assets/video/video.mp4";

const Home = () => {
  const videoRef = useRef(null); 
  const navigate = useNavigate();

  // Функция для воспроизведения видео и перехода
  const handleLinkClick = (path) => {
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
          />
        </div>
        <div className="container_buttons">
          <span className="font_english">
            <button onClick={() => handleLinkClick("/english")} className="link-button">
              English
            </button>
          </span>
          <button onClick={() => handleLinkClick("/thai")} className="link-button">
            ภาษาไทย
          </button>
          <span className="font_english">
            <button onClick={() => handleLinkClick("/russian")} className="link-button">
              Русский
            </button>
          </span>
          <button onClick={() => handleLinkClick("/chinese")} className="link-button">
            中文
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Thai";

// Основной компонент Thai, который также включает в себя логику изменения размера шрифтов в зависимости от высоты экрана
const Thai = () => {
  const [height, setHeight] = useState(window.innerHeight - 375);
  const [fontSize, setFontSize] = useState({
    base: height * 0.04,
    minText: height * 0.04,
    customText: height * 0.045,
  });

  useEffect(() => {
    // Функция для установки значения vh в CSS переменную
    const setVhProperty = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVhProperty(); // Устанавливаем значение при монтировании

    // Обновляем значение при изменении размера окна
    window.addEventListener('resize', setVhProperty);

    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight - 375;
      setHeight(newHeight);

      // Логика для обновления размера шрифтов при изменении высоты
      let baseFontSize = newHeight * 0.04;
      let minTextFontSize = newHeight * 0.045;
      let customTextFontSize = newHeight * 0.045;

      setFontSize({
        base: baseFontSize,
        minText: minTextFontSize,
        customText: customTextFontSize,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [height]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "calc(var(--vh) * 100)", // Используем пользовательскую переменную vh для высоты
      }}
    >
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
      <div className="custom-content-thai">
        <div className="custom-black">
          <div className="custom-cate-wraper">
            <div className="custom-wraper-wellcome">
              {/* Текст с начальным размером 18px */}
              <div
                className="custom-text pt adjustable-text"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.minText}px`,
                }}
              >
                ยินดีต้อนรับสู่ KATY beauty!
              </div>
              {/* Текст с начальным размером 15px */}
              <div
                className="custom-min-text adjustable-text"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.minText}px`,
                }}
              >
                เราให้บริการที่ดีที่สุด:

                <br />
                ทำเล็บมือเล็บเท้าต่อขนตา

                <br />
                เรารับประกันบริการคุณภาพสูง

                <br />
                มีให้เลือกหลายสีและการออกแบบเชิงศิลปะของเรา

                <br />
                คุณแน่ใจว่าจะพบบางสิ่งบางอย่างที่คุณชอบ

                <br />
                เล็บและขนตาของคุณจะแข็งแรงและมีสุขภาพดี

                <br />
                มาสร้างสรรค์ดีไซน์ความงามด้วยกัน
                
              </div>
              {/* Текст с начальным размером 18px */}
              <div
                className="custom-text mt adjustable-text"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.minText}px`,
                }}
              >
                ด้วยรัก, KATY
              </div>
            </div>
            <div className="custom-footer">
              <div className="custom-container">
                <div className="custom-info-jobs">
                  <Link
                    to={"/info"}
                    className="adjustable-text"
                    style={{ fontSize: `${fontSize.customText}px` }}
                  >
                    ข้อมูล
                  </Link>
                </div>
                <div className="custom-info-jobs">
                  <Link
                    to={"/info"}
                    className="adjustable-text"
                    style={{ fontSize: `${fontSize.customText}px` }}
                  >
                    รับงานกับเรา
                  </Link>
                </div>
                <Link
                  to={"/map"}
                  className="adjustable-text"
                  style={{ fontSize: `${fontSize.customText}px` }}
                >
                  เราอยู่ที่น
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thai;

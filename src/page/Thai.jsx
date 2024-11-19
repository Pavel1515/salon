import React, { useEffect, useState } from 'react';
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
    // Функция для вывода высоты экрана в консоль и изменения размера шрифта
    const handleResize = () => {
      const newHeight = window.innerHeight - 375;
      setHeight(newHeight);
      
      // Логика для обновления размера шрифтов при изменении высоты
      let baseFontSize = newHeight * 0.04;
      let minTextFontSize = newHeight * 0.04;
      let customTextFontSize = newHeight * 0.045;

      setFontSize({
        base: baseFontSize,
        minText: minTextFontSize,
        customText: customTextFontSize,
      });
    };

    // Добавление слушателя изменения размера экрана
    window.addEventListener('resize', handleResize);

    // Проверяем размер экрана при монтировании компонента
    handleResize();

    // Удаление слушателя при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, [height]);

  return (
    <>
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
      <div className="custom-content" >
        <div className="custom-black">
          <div className="custom-cate-wraper">
            <div className="custom-wraper-wellcome">
              {/* Текст с начальным размером 18px */}
              <div
                className="custom-text pt adjustable-text"
                style={{
                  whiteSpace: "normal", color: "#ffffff",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.customText}px`
                }}
              >
                ยินดีต้อนรับสู่ KATY beauty!
              </div>
              {/* Текст с начальным размером 15px */}
              <div
                className="custom-min-text adjustable-text"
                style={{
                  whiteSpace: "normal", color: "#ffffff",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.minText}px`
                }}
              >
                เราให้บริการที่ดีที่สุด:
                <br />
                ทำเล็บมือเล็บเท้าต่อขนตา
                <br />
                เรารับประกันบริการคุณภาพสูง
                <br />
                และความคุ้มครองที่ไร้ที่ติ
                <br />
                คุณจะพบสิ่งที่เหมาะสมอย่างแน่นอน
                <br />
                จากจานสี и дизайнов;
                <br />
                เล็บของคุณจะแข็งแรงและมีสุขภาพดี
                <br />
                มาสร้างสรรค์ดีไซน์ความงามด้วยกันเถอะ!
              </div>
              {/* Текст с начальным размером 18px */}
              <div
                className="custom-text mt adjustable-text"
                style={{
                  whiteSpace: "normal", color: "#ffffff",
                  wordBreak: "break-word",
                  fontSize: `${fontSize.customText}px`
                }}
              >
                ด้วยรัก, KATY
              </div>
            </div>
            <div className="custom-footer">
              <div className="custom-container">
                <div className="custom-info-jobs">
                  <Link to={"/info"} className="adjustable-text" style={{ fontSize: `${fontSize.minText}px` }}>
                    ข้อมูล
                  </Link>
                </div>
                <div className="custom-info-jobs">
                  <Link to={"/info"} className="adjustable-text" style={{ fontSize: `${fontSize.minText}px` }}>
                    รับงานกับเรา
                  </Link>
                </div>
                <Link to={"/map"} className="adjustable-text" style={{ fontSize: `${fontSize.minText}px` }}>
                  เราอยู่ที่น
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thai;

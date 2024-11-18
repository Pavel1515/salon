import React, { useEffect, useRef } from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Thai";

const Thai = () => {
  const contentRef = useRef(null);

  const adjustFontSize = () => {
    if (contentRef.current) {
      const textElements = contentRef.current.querySelectorAll(".adjustable-text");

      textElements.forEach((el) => {
        let fontSize = parseInt(el.dataset.defaultFontSize) || 16;
        el.style.fontSize = `${fontSize}px`;

        while ((el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) && fontSize > 1) {
          fontSize -= 1;
          el.style.fontSize = `${fontSize}px`;
        }
      });
    }
  };

  useEffect(() => {
    // Настраиваем размер текста при монтировании компонента и изменении размеров окна
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    // Используем ResizeObserver для слежения за изменениями размеров контента
    const resizeObserver = new ResizeObserver(() => {
      adjustFontSize();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Убираем слушатель события resize и наблюдатель при размонтировании
    return () => {
      window.removeEventListener("resize", adjustFontSize);
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
    };
  }, []);

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
      <div className="content content_mb custom-content" ref={contentRef}>
        <div className="custom-black">
          <div className="custom-cate-wraper">
            <div className="custom-wraper-wellcome" style={{color: 'white'}}>
              {/* Текст с начальным размером 18px */}
              <div
                className="custom-text pt adjustable-text"
                data-default-font-size="18"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                ยินดีต้อนรับสู่ KATY beauty!
              </div>
              {/* Текст с начальным размером 15px */}
              <div
                className="custom-min-text adjustable-text"
                data-default-font-size="15"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
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
                data-default-font-size="18"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                ด้วยรัก, KATY
              </div>
            </div>
            <div className="custom-footer">
              <div className="custom-container">
                <div className="custom-info-jobs">
                  <Link to={"/info"} className="adjustable-text" data-default-font-size="15">
                    ข้อมูล
                  </Link>
                </div>
                <div className="custom-info-jobs">
                  <Link to={"/info"} className="adjustable-text" data-default-font-size="15">
                    รับงานกับเรา
                  </Link>
                </div>
                <Link to={"/map"} className="adjustable-text" data-default-font-size="15">
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

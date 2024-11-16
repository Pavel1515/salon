import React from "react";
import "../style/index.scss";
import { Link } from "react-router-dom";
import Header from "../component/Header-Thai";

const Thai = () => {
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
        animeInstagram={"exaggerate-instagram "}
      />
      <div className="content content_mb">
        <div className="black">
          <div className="cate_wraper">
            <div className="wraper_wellcome">
              <div className="text pt">ยินดีต้อนรับสู่ KATY beauty!</div>
              <div className="min_text">
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
                จากจานสีและการออกแบบขนาดใหญ่
                <br />
                เล็บของคุณจะแข็งแรงและมีสุขภาพดี
                <br />
                มาสร้างสรรค์ดีไซน์ความงามด้วยกันเถอะ!
              </div>
              <div className="text mt">ด้วยรัก, KATY</div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="info_jobs">
                  <Link to={"/info"}> ข้อมูล</Link>
                </div>
                <div className="info_jobs">
                  <Link to={"/info"}> รับงานกับเรา</Link>
                </div>
                <Link to={"/map"}>เราอยู่ที่น</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thai;

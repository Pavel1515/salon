import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/kt.svg";
import facebook from "../assets/image/fb.svg";
import instagram from "../assets/image/inst.svg";
import tiktok from "../assets/image/tk.svg";
import menu from "../assets/image/menu.svg";
import "../style/index.scss";
import Layout from "../component/Layout";

const Map = () => {
  return (
    <>
      {/* <header className="pk">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="book-now">
            <Link to={"/recording"}>
              <p> BOOK</p>
              <span>now</span>
            </Link>
          </div>
          <div className="link">
            <a href="https://www.facebook.com/profile.php?id=100089697782103&mibextid=LQQJ4d">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/nails_antalya_hurma/?igshid=YmMyMTA2M2Y%3D">
              <img src={instagram} alt="" />
            </a>
            <a href="https://www.tiktok.com/@kt_nails?_t=8Z1oQBUP2BR&_r=1">
              <img src={tiktok} alt="" />
            </a>
          </div>
        </div>
      </header>
      <nav className="mobile" style={{ animationName: "decreaseHeader" }}>
        <div className="mobile-container">
          <div className="lie"></div>
          <div className="logo-mobile" style={{ animationName: "decrease" }}>
            <img src={logo} style={{ animationName: "decrease-img" }} alt="" />
          </div>
          <a href="https://www.facebook.com/profile.php?id=100089697782103&mibextid=LQQJ4d">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/nails_antalya_hurma/?igshid=YmMyMTA2M2Y%3D">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/@kt_nails?_t=8Z1oQBUP2BR&_r=1">
            <img src={tiktok} alt="" />
          </a>

          <Link className="menu-mobile" to={"/"}>
            <img src={menu} alt="" />
          </Link>
        </div>

        <Link className="book" to={"/recording"}>
          <p>BOOK</p>
          <span>now</span>
        </Link>
      </nav> */}
      <Layout
        nameOne={"decreaseHeader"}
        nameTwo={"decrease-img"}
        nameTree={"decrease"}
        nameFoo={"lies"}
        vision={true}
        book={false}
        menuAnime={"appearanceMenu"}
      />
      <div className="content">
      <div className="black">
        <iframe
          className="iframe"
          src="https://maps.google.com/maps?hl=en&amp;q=Toronto+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
        </div>
      </div>
    </>
  );
};

export default Map;

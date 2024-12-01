import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import facebook from "../assets/image/fb.svg";
import instagram from "../assets/image/inst.svg";
import tiktok from "../assets/image/tk.svg";
const Header = ({
  header,
  image,
  position,
  bookanime,
  animeInstagram,
  animeTiktok,
  animeFacebook,
  url,
}) => {
  return (
    <>
      <nav className="mobile" style={{ animationName: header }}>
        <div className="mobile-container">
          <div className="lie"></div>
          <NavLink
            to={url}
            className="logo-mobile"
            style={{ animationName: position }}
          >
            <img src={logo} style={{ animationName: image }} alt="" />
          </NavLink>
          <a
            className="facebook"
            style={{ animationName: animeFacebook }}
            href="https://www.facebook.com/katy.kt.547"
          >
            <img src={facebook} alt="" />
          </a>
          <a  className="facebook"
            style={{ animationName: animeInstagram }} href="https://www.instagram.com/katy_beauty_salon_bangkok?igsh=MWUzaHd3YXo4MTJiZA%3D%3D">
            <img src={instagram} alt="instagram" />
          </a>
          <a
            style={{ animationName: animeTiktok }}
            className="tiktok"
            href="https://www.tiktok.com/@katy_beautysalon_bangkok?_t=8rPffmhwWf7&_r=1"
          >
            <img src={tiktok} alt="tiktok" />
          </a>
        </div>

        <Link
          to={"/recording-ru"}
          className="book_mb arial"
          style={{ animationName: bookanime }}
        >
        <p className="arial anime_books">Book
        <span className="now arial">now</span>
        </p>
   
        </Link>
      </nav>
    </>
  );
};

export default Header;

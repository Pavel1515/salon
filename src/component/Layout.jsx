import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/kt.svg";
import facebook from "../assets/image/fb.svg";
import instagram from "../assets/image/inst.svg";
import tiktok from "../assets/image/tk.svg";
import menu from "../assets/image/menu.svg";
const Layout = ({
  nameOne,
  nameTwo,
  nameTree,
  vision,
  book,
  nameFoo,
  bookanime,
  menuAnime,
}) => {
  return (
    <>
      <header className="pk">
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
      <nav className="mobile" style={{ animationName: nameOne }}>
        <div className="mobile-container">
          <div className="lie" style={{ animationName: nameFoo }}></div>
          <NavLink
            to={"/"}
            className="logo-mobile"
            style={{ animationName: nameTree }}
          >
            <img src={logo} style={{ animationName: nameTwo }} alt="" />
          </NavLink>
          <a href="https://www.facebook.com/profile.php?id=100089697782103&mibextid=LQQJ4d">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/nails_antalya_hurma/?igshid=YmMyMTA2M2Y%3D">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/@kt_nails?_t=8Z1oQBUP2BR&_r=1">
            <img src={tiktok} alt="" />
          </a>
          {vision ? (
            <a style={{ animationName: menuAnime }} className="menu-mobile">
              <img src={menu} alt="" />
            </a>
          ) : (
            ""
          )}
        </div>
        {book ? (
          <Link
            to={"/recording"}
            className="book_mb"
            style={{ animationName: bookanime }}
          >
            <p>BOOK</p>
            <span>now</span>
          </Link>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Layout;

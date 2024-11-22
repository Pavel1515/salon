import React, {  useState } from "react";
import "../style/index.scss";
import english from "../assets/image/flags/gb.svg";
import thai from "../assets/image/flags/th.svg";
import russian from "../assets/image/flags/ru.svg";
import chinese from "../assets/image/flags/cn.svg";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import opacity from "../assets/opacity.json";
const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Состояние для выбранного языка

  return (
    <>
      <div className="home">
        <div style={{width: "100%", height: "50%", maxHeight: "50%"}} className="svg-animation-container" >
        
        <Lottie  animationData={opacity} loop={true}    
        style={{
          width: "100%",
          height: "100%",
        }} 
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        preserveAspectRatio={"none"}
        />

        </div>
        <div style={{width: "100%", height: "50%"}}  className="container_buttons">
          <span className={`font_english ${selectedLanguage && selectedLanguage !== 'english' ? 'hidden' : ''}`}>

            <Link className={`link-button`} to="/">
              <img src={english} alt="en" />
              </Link>
         
          </span>
          <Link className={`link-button`} to="/thai">
          <button
           
            className={`link-button ${selectedLanguage && selectedLanguage !== 'thai' ? 'hidden' : ''}`}
          >
            <img src={thai} alt="th" />
          </button>
          </Link>
          <span className={`font_english ${selectedLanguage && selectedLanguage !== 'russian' ? 'hidden' : ''}`}>
            <button
            
              className={`link-button`}
            >
              <img src={russian} alt="ru" />
            </button>
          </span>
          <button
         
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
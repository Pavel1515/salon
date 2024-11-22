import React from "react";

import "../style/index.scss";
import text from "../assets/image/text/ru/BOOKRussian.svg";

const Rules = () => {
  return (
   
    <div className="rules-image">
      <img src={text} alt="Kt" />
      <div className="custom-footer ">
        <a className="arial" href="https://n1325477.alteg.io/">ПОДТВЕРДИТЬ</a>
      </div>
    </div>
  );
};

export default Rules;
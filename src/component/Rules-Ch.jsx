import React from "react";

import "../style/index.scss";
import text from "../assets/image/text/ch/xBOOKChinese.svg";

const Rules = () => {
  return (
   
    <div className="rules-image">
      <img src={text} alt="Kt" />
      <div className="custom-footer ">
        <a className="arial" href="https://n1325533.alteg.io">同意</a>
      </div>
    </div>
  );
};

export default Rules;
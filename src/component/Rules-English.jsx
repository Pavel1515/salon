import React from "react";

import "../style/index.scss";
import text from "../assets/image/text/en/BOOK-English.svg";

const Rules = () => {
  return (
   
    <div className="rules-image">
      <img src={text} alt="Kt" />
      <div className="custom-footer ">
        <a className="arial" href="https://n1177760.alteg.io"> AGREE</a>
      </div>
    </div>
  );
};

export default Rules;
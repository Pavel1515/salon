import React from "react";

import "../style/index.scss";
import text from "../assets/image/text/thay/BOOK-Thai.svg";

const Rules = () => {
  return (
   
    <div className="rules-image thai">
      <img src={text} alt="Kt" />
      <div className="custom-footer">
        <a href="https://n1177760.alteg.io"> ตกลง</a>
      </div>
    </div>
  );
};

export default Rules;

import React, { useState } from "react";
import Iframe from "../component/Iframe";
import Layout from "../component/Layout";
import Rules from "../component/Rules";
import "../style/index.scss";

const Recording = () => {
  const [active, setActive] = useState(true);
  return (
    <>
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
        <div className="container_mb">
          <div className="black">
            {active ? <Rules setActive={setActive} /> : <Iframe />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recording;

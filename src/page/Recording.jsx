import React, { useState } from "react";
import Iframe from "../component/Iframe";
import Layout from "../component/Header-Thai";
import Rules from "../component/Rules-Thai";

const Recording = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <Layout
        url={"/thai"}
        header={"decreaseHeader"}
        image={" decrease-img"}
        position={"decrease"}
        bookanime={"books"}
        menuAnime={"appearanceMenu"}
        animeTiktok={"tiktook"}
        animeFacebook={"facebok"}
        animeInstagram={"instagram"}
      />
      <div className="content">
        {active ? <Rules setActive={setActive} /> : <Iframe />}
      </div>
    </>
  );
};

export default Recording;

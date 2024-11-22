import React from "react";
// import "../style/index.css";
import Layout from "../component/Header-Thai";

const Map = () => {
  return (
    <>
      <Layout
        url={"/chinese"}
        header={"decreaseHeader"}
        image={" decrease-img"}
        position={"decrease"}
        bookanime={"books"}
        menuAnime={"appearanceMenu"}
        animeTiktok={"tiktook"}
        animeFacebook={"facebok"}
      />
      <div className="content">
        <iframe
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
          }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62005.92500763465!2d100.567266!3d13.756528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fafe8eeda7d%3A0xd74d0304f51a28c4!2sKaty%20Beauty%20Salon!5e0!3m2!1szh-CN!2szh-CN!4v1732278221567!5m2!1szh-CN!2szh-CN" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>


</div>
    </>
  );
};

export default Map;

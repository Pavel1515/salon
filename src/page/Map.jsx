import React from "react";
// import "../style/index.css";
import Layout from "../component/Header";

const Map = () => {
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
      />
      <div className="content">
        <iframe
          style={{ width: "100%", height: "100%", border: "none", outline:"none" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11583.499953927892!2d100.56770616564819!3d13.758626377901226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fafe8eeda7d%3A0xd74d0304f51a28c4!2sKaty%20Beauty%20Salon!5e1!3m2!1suk!2sua!4v1731516175753!5m2!1suk!2sua"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;

import React from "react";
import Navbar from "../DashBoard/Components/NavBar/Navbar";
import CurencySection from "../DashBoard/Components/CurencySection/CurencySection";
import Footer from "../DashBoard/Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div
      className="main-container backGround"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/backGround.png"
        })`,
        // background: "#D4F1F4",
      }}
    >
      {" "}
      {/* NavBar.................. */}{" "}
      <div>
        <Navbar />
      </div>
      {/* Currency Section........ */}{" "}
      <div className="about-div">
        <h1 className="mb-3"
          style={{
            color: "#FFFFFF",
          }}
        >
          About us{" "}
        </h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Esse enim
        dolorum officiis, odit unde sunt dicta atque nobis harum accusantium eum
        debitis facilis ab.Fugit omnis error consequatur necessitatibus
        repellendus tempora blanditiis quibusdam voluptas magnam repellat ?
        Nulla earum dolorem ullam suscipit laborum magni, ratione libero dolores
        neque provident, odit velit vero nobis quaerat officia atque.Possimus
        minus sint autem ? Molestias libero exercitationem dolor dicta, laborum
        ad blanditiis sit autem tempora aspernatur eligendi ipsum vel, possimus
        provident sunt vero voluptate alias.Veniam facere ut quam ratione ad
        nisi enim dolores hic.Nisi in at, minima dolores ipsum sint consequatur
        quaerat eaque. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.At eos autem
        quis quasi.Ut voluptatibus necessitatibus nisi nemo.Quia nemo temporibus
        earum, placeat excepturi officia adipisci, eveniet, fugit illum odit
        maiores vel odio ducimus cumque accusamus esse alias velit nam assumenda
        ea error recusandae ? Impedit iure expedita cumque in veniam. <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quas voluptate
        corrupti explicabo autem doloremque fugiat est aliquam illum accusantium
        aut, numquam impedit quibusdam sed itaque incidunt illo odit officiis,
        minus non repudiandae quo tempora consectetur eaque.Rem nihil doloribus
        commodi fugit magni aut praesentium debitis saepe quibusdam earum, dolor
        odit assumenda, aliquam sapiente corporis fugiat.Ipsum inventore
        repellat, possimus, deserunt optio nulla necessitatibus ipsa natus nisi
        modi, temporibus blanditiis magni recusandae assumenda non alias
        veritatis dolor at ipsam!Odio libero assumenda mollitia sit ea unde
        deserunt at.Qui commodi excepturi in laborum, consectetur possimus
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore eum
        fugiat iusto eius sed, illo, alias iure maxime magnam tempore assumenda
        dolores neque nihil id facere a magni debitis amet
        laboriosam.Praesentium vel delectus doloremque cupiditate aspernatur,
        esse assumenda perspiciatis voluptatibus repellat, blanditiis earum
        autem eligendi!Sapiente soluta rerum aperiam perspiciatis alias expedita
        vitae tenetur nam cum earum excepturi necessitatibus dolores ipsa neque
        veniam harum assumenda, laboriosam illum accusantium voluptates aliquam
        exercitationem facere pariatur.Consectetur, nemo beatae a, eveniet totam
        voluptates rerum sed velit at, iusto tenetur eius dicta quam!Aut
        consectetur, dolorem quae autem sint ad.Doloremque, impedit corrupti ?
      </div>
      {/* footer.................. */}{" "}
      <div>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default AboutUs;

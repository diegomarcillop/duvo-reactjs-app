import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Prices from "../components/Prices/Prices";
import Contact from "../components/ContactForm/ContactForm";
import Navegation from "../containers/Navegation";

export default function Home() {
  return (
    <>
      <Navegation />
      <Carousel />
      <Prices />
      <Contact />
    </>
  );
}

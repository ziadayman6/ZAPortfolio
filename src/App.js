import { useEffect } from "react";
import WOW from "wowjs";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";
import Presentation from "./sections/Presentation";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";

import "bootstrap-icons/font/bootstrap-icons.css";


export default function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <NavBar />
      <Presentation />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
      <UpArrow />
    </>
  );
}

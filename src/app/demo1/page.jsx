import MainBanner from "../components/PageDemo1/MainBanner/MainBanner";
import About from "../components/PageDemo1/About/About";
import MidBanner from "../components/PageDemo1/MidBanner/MidBanner";
import AnotherMidBanner from "../components/PageDemo1/AnotherMidBanner/AnotherMidBanner";
import Cards from "../components/PageDemo1/Cards/Cards";
import Prices from "../components/PageDemo1/Prices/Prices";
import FooterBanner from "../components/PageDemo1/FooterBanner/FooterBanner";
import FooterSocial from "../components/PageDemo1/FooterSocial/FooterSocial";

export const Demo1 = () => {
  return (
    <>
      <MainBanner />
      <About />
      <MidBanner />
      <AnotherMidBanner />
      <Cards />
      <Prices />
      <FooterBanner />
      <FooterSocial
        text_insta={"Mantente conectado con nosotros <a href='#'><b>@patakicater</b></a> para recibir ofertas super exclusivas."}
        text_tiktok={"Mantente conectado con nosotros <a href='#'><b>@patakicater</b></a> para recibir ofertas super exclusivas."}
      />
    </>
  );
}

export default Demo1;
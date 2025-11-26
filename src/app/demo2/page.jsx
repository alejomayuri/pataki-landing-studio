import Header from "../components/PageDemo2/Header/Header";
import MainBanner from "../components/PageDemo2/MainBanner/MainBanner";
import PersonCards from "../components/PageDemo2/PersonCards/PersonCards";
import TextCards from "../components/PageDemo2/TextCards/TextCards";
import MidBanner from "../components/PageDemo2/MidBanner/MidBanner";
import Testimonials from "../components/PageDemo2/Testimonials/Testimonials";
import FooterSocial from "../components/PageDemo1/FooterSocial/FooterSocial";
import FooterBanner from "../components/PageDemo2/FooterBanner/FooterBanner";
import Footer from "../components/PageDemo2/Footer/Footer";

export const Demo2 = () => {
    return (
        <>
            <Header />
            <MainBanner />
            <PersonCards />
            <TextCards />
            <MidBanner />
            <Testimonials />
            <FooterSocial
                text_insta={"Mantente conectado con nosotros <a href='#'><b>@patakiNYC</b></a> para recibir ofertas super exclusivas."}
                text_tiktok={"Mantente conectado con nosotros <a href='#'><b>@patakiNYC</b></a> para recibir ofertas super exclusivas."}
            />
            <FooterBanner />
            <Footer />
        </>
    );
}

export default Demo2;

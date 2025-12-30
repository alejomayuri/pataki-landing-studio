import MainBanner from "../components/PageDemo3/MainBanner/MainBanner";
import ProductsSection from "../components/PageDemo3/ProductsSection/ProductsSection";
import MidBanner from "../components/PageDemo3/MidBanner/MidBanner";
import CardsContainer from "../components/PageDemo3/CardsContainer/CardsContainer";
import BottomBanner from "../components/PageDemo3/BottomBanner/BottomBanner";
const DATA_1 = [
    {
        id: 1,
        image: "demos/demosPublic/demo3/cards/card1.jpg",
        title: "POLOS",
        description: "Clásico moderno, siempre vigente",
    },
    {
        id: 2,
        image: "demos/demosPublic/demo3/cards/card2.jpg",
        title: "SHORTS",
        description: "Hechos para moverte libre",
    },
    {
        id: 3,
        image: "demos/demosPublic/demo3/cards/card3.jpg",
        title: "CARTERAS",
        description: "Elegancia práctica para cada día",
    },
];

const DATA_2 = [
    {
        id: 1,
        image: "demos/demosPublic/demo3/cards/card4.jpg",
        title: "BLAZERS",
        description: "Estructura moderna, estilo eterno",
    },
    {
        id: 2,
        image: "demos/demosPublic/demo3/cards/card5.jpg",
        title: "MOCHILAS",
        description: "Minimalismo que acompaña tu ritmo",
    },
    {
        id: 3,
        image: "demos/demosPublic/demo3/cards/card6.jpg",
        title: "SACOS",
        description: "Abrigo con carácter moderno",
    },
];

export const Demo3 = () => {
  return (
    <>
      <MainBanner />
      <ProductsSection />
      <MidBanner />
      <CardsContainer data={DATA_1} />
      <BottomBanner />
      <CardsContainer data={DATA_2} />
    </>
  );
}

export default Demo3;
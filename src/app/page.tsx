import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Demos from "./components/Demos/Demos";
import Cta from "./components/Cta/Cta";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Prices from "./components/Prices/Prices";
import HomeForm from "./components/HomeForm/HomeForm"; 

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <Demos />
        <Cta />
        <HowItWorks />
        <Prices />
        <HomeForm />
    </>
  );
}

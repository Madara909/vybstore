import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Travel from "./components/Travel";
import Illustrations from "./components/Illustrations";
import Influencer from "./components/Influencer";
import TiltedCards from "./components/temp/TiltedCards";
import CardList from "./components/temp/CardList";
import Stack from "./components/Stack";
import Faqs from "./components/Faqs";
import FaqSec from "./components/temp";

export default function Home() {
  return (
      <div className='bg-[#181818]'>
          <div className='max-w-[1440px] mx-auto'>
              <NavBar />
              <HeroSection/>
              <Travel/>
              <Illustrations/>
              <Influencer/>
              <Stack/>
              <Faqs/>
              
          </div>
      </div>
  );
}

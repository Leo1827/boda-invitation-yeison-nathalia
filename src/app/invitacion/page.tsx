import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Calendar from "@/components/sections/Calendar";
import Location from "@/components/sections/Location";
import DressCode from "@/components/sections/Dresscode";
import Confirmation from "@/components/sections/Confirmation";
import Message from "@/components/sections/Message";
import ImageParallax from "@/components/sections/ImageParallax";
import GiftSection from "@/components/sections/GiftSection";
import FooterSection from "@/components/sections/Footer";
import Parents from "@/components/sections/Parents";

export default function Invitacion() {
  return (
    <main>
      <Hero />
      <Message />
      <Countdown />
      <Calendar />
      <ImageParallax />
      <Location />
      <DressCode />
      <GiftSection />
      <Parents
        groomParents={{
          father: "Nombre del padre",
          mother: "Nombre de la madre",
        }}
        brideParents={{
          father: "Nombre del padre",
          mother: "Nombre de la madre",
        }}
      />
      <Confirmation />
      <FooterSection />
    </main>
  );
}
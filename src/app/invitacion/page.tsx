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
          father: "Manuel Urbano",
          mother: "Marleny Urbano",
        }}
        brideParents={{
          father: "Hilde Murcia",
          mother: "Maria Judith Hoyos",
        }}
      />
      <Confirmation />
      <FooterSection />
    </main>
  );
}
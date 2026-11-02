import HeroEnvelope from "@/components/sections/HeroEnvelope";
import HeroEnvelopeMovil from "@/components/sections/HeroEnvelopeMovil";

export default function Home() {
  return (
    <>
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <HeroEnvelope />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <HeroEnvelopeMovil />
      </div>
    </>
  );
}
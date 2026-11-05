
"use client";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

export default function CalendarSection() {
    const time = useCountdown("2026-12-06T16:00:00");

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  const timeUnits = [
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Min", value: minutes },
    { label: "Seg", value: seconds },
  ];

  return (
    <section className="relative bg-[#f3f0e9] md:py-16 px-6 md:px-12 overflow-hidden font-[family-name:var(--font-cormorant)]">

        {/* Flores decorativas - Esquinas */}
        <div className="absolute top-30 md:top-0 left-0 w-32 h-32 md:w-64 md:h-[680px] object-cover
                sepia-[0.25]
                saturate-[0.65]
                brightness-[1.08]
                contrast-[0.88]
                hue-rotate-[2deg]
                opacity-30 pointer-events-none">
            <img src="/envelope/flores/flor2.png" alt="" className="object-contain w-full md:h-full h-[900px]" />
        </div>

        <div className="absolute bottom-1 -right-24 w-48 h-48 md:w-64 md:h-64 object-cover
                sepia-[0.25]
                saturate-[0.65]
                brightness-[1.08]
                contrast-[0.88]
                hue-rotate-[2deg]
                opacity-40 mr-8 pointer-events-none">
            <img src="/envelope/flores/flor3.png" style={{ rotate: '250deg' }} alt="" className="object-contain w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 mb-4">

            {/* Lado Izquierdo: El Gran Día */}
            <div className="flex flex-col text-[#a64e1b98] my-8 pb-4 items-center justify-center relative z-10">
                <h2 className="font-[family-name:var(--font-pinyon)] italic text-5xl md:text-5xl mb-2 opacity-90 font-light tracking-[0.2em]">
                    Faltan
                </h2>

                <div className="flex gap-6 md:gap-12">
                    {timeUnits.map((unit) => (
                        <div key={unit.label} className="flex flex-col items-center">
                            <span className="text-4xl md:text-6xl font-light mb-2 leading-none">
                                {unit.value.toString().padStart(2, '0')}
                            </span>
                            <span className="text-xs md:text-sm uppercase tracking-widest opacity-80">
                                {unit.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lado Derecho: Fotos */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center items-end h-[400px] md:h-[450px] w-full"
            >
                {/* Imagen Principal en Arco */}
                <div className="relative w-52 mr-16 h-96 md:w-70 md:h-[450px] overflow-hidden rounded-full shadow-lg">
                    <img
                        src="/envelope/image3.jpeg"
                        alt="El Beso"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Imagen Secundaria Flotante */}
                <div className="
                        absolute
                        right-1
                        md:right-0
                        bottom-4
                        md:bottom-0
                        w-40
                        h-52
                        md:w-48
                        md:h-64
                        overflow-hidden
                        shadow-2xl
                        border-4
                        border-white
                        z-20
                        ">
                    <img
                        src="/envelope/image2.jpeg"
                        alt="Detalle"
                        className="object-cover w-full h-full"
                    />
                </div>
            </motion.div>

        </div>

    </section>
  );
}

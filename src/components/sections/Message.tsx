"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="relative w-full py-20 overflow-hidden flex items-center justify-center min-h-[450px]">
      
      {/* 
        Este es el gradiente de desvanecido.
        'before:' crea un elemento extra.
        'bg-gradient-to-t' crea el degradado de abajo hacia arriba.
        'from-[#f3f0e9]' define el color sólido abajo.
        'to-transparent' define la transparencia arriba.
        'h-24' controla qué tan alto llega el efecto.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#deb98860] via-[#f3f0e9]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Flor Izquierda */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.9, x: -60 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/4 pb-8 -translate-y-1/2 w-38 md:w-32 lg:w-42 select-none"
      >
        <Image 
          src="/envelope/flores/flor4.png" 
          alt="Decoración floral izquierda"
          width={500}
          height={500}
          className="ml-10 w-100 h-auto sepia-[0.25]
          saturate-[0.65]
          brightness-[1.08]
          contrast-[0.88]
          hue-rotate-[2deg]
          opacity-40"
        />
      </motion.div>

      {/* Contenedor de Texto Central */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl text-center flex flex-col gap-1"
      >
        <p className="text-[#394225] italic font-bold font-[family-name:var(--font-cormorant)] text-2xl md:text-xl lg:text-lg leading-relaxed md:px-0 px-10">
          “Revístanse de sentimientos 
          <br></br>de misericordia, bondad, humildad, mansedumbre y paciencia.
          <br></br>Sopórtense mutuamente y perdónense. 
          <br></br>Y por encima de todo, revístanse del amor, que es el vínculo de la unidad perfecta.”
        </p>

        {/* SEPARADOR */}
        <div className="flex items-center justify-center w-4/8 mx-auto mt-8">
          <div className="flex-grow h-px bg-[#a64e1be5]" />

          <span className="px-1 font-bold text-[#a64e1be5] text-xl leading-none">♡</span>

          <div className="flex-grow h-px bg-[#a64e1be5]" />
        </div>

        <p className="text-[#a64e1be5] font-[family-name:var(--font-pinyon)] text-2xl md:text-4xl lg:text-3xl px-8 md:px-14">
            — Colosenses 3. 12-14
        </p>
      </motion.div>

      {/* Flor Derecha */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-1 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-78 select-none"
      >
        <Image
          src="/envelope/flores/flor1.png" 
          alt="Decoración floral derecha"
          width={500}
          height={500}
          className="w-52 ml-10 pb-52 md:w-32 md:pb-0 md:ml-52 h-auto sepia-[0.25]
              saturate-[0.65]
              brightness-[1.08]
              contrast-[0.88]
              hue-rotate-[-10deg]
              opacity-40"
        />
      </motion.div>

      {/* ARENA PLAYA */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]">
        <Image
          src="/envelope/flores/flor5.png"
          alt="flores"
          width={1920}
          height={400}
          className="
            w-full
            h-full
            sepia-[0.25]
            saturate-[0.65]
            brightness-[1.08]
            contrast-[0.88]
            hue-rotate-[2deg]
            opacity-20
          "
        />
      </div>
    </section>
  );
}
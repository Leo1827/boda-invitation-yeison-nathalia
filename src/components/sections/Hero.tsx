
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Music2 } from "lucide-react";
import "@/components/sections/Hero.module.css";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  // DETENER RECORRIDO
  const stopGuidedScroll = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // RECORRIDO GUIADO POR TODA LA PÁGINA
  const startGuidedScroll = () => {
    stopGuidedScroll();

    let previousTime = 0;

    // Velocidad del recorrido: píxeles por segundo
    const speed = 45;

    const animate = (currentTime: number) => {
      if (!previousTime) {
        previousTime = currentTime;
      }

      const deltaTime = Math.min(currentTime - previousTime, 50);
      previousTime = currentTime;

      // Altura total de la página, incluyendo el footer
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      const maxScroll = pageHeight - window.innerHeight;
      const remaining = maxScroll - window.scrollY;

      // Llegó al final de la página
      if (remaining <= 1) {
        stopGuidedScroll();
        return;
      }

      // Desplazamiento progresivo y suave
      const movement = Math.min(
        (speed * deltaTime) / 1000,
        remaining
      );

      window.scrollBy(0, movement);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // DETENER GUÍA SI EL USUARIO INTERACTÚA
  useEffect(() => {
    const handleUserInteraction = () => {
      stopGuidedScroll();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ];

      if (scrollKeys.includes(event.key)) {
        stopGuidedScroll();
      }
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("pointerdown", handleUserInteraction);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleKeyDown);

      stopGuidedScroll();
    };
  }, []);

  // REPRODUCIR / PAUSAR
  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      stopGuidedScroll();
    } else {
      try {
        await audioRef.current.play();

        // Iniciar recorrido por toda la invitación
        startGuidedScroll();

      } catch (error) {
        console.error("No se pudo reproducir la canción:", error);
        setPlaying(false);
      }
    }
  };

  // REINICIAR CANCIÓN
  const handleRestart = async () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;

    try {
      await audioRef.current.play();
    } catch (error) {
      console.error("No se pudo reproducir la canción:", error);
      setPlaying(false);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-20 md:pt-18"
      aria-label="Invitación de boda de Cristian y Daniela"
    >

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      {/* FONDO */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/back/fondo1.png"
          alt="Mar"
          fill
          priority
          className="object-cover object-center "
        />
      </div>

      {/* IMAGEN PRINCIPAL */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">

        {/* CONTENEDOR CON DESVANECIDO */}
        <div
          className="
            relative
            w-[85%]
            h-[78%]
            md:w-[45%]
            md:h-[80%]
            overflow-hidden
            [mask-image:radial-gradient(ellipse_at_center,black_1%,rgba(0,0,0,0.95)_30%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.25)_74%,transparent_88%)]
            [-webkit-mask-image:radial-gradient(ellipse_at_center,black_1%,rgba(0,0,0,0.95)_24%,rgba(0,0,0,0.65)_54%,rgba(0,0,0,0.25)_62%,transparent_72%)]
          "
        >
          <Image
            src="/back/fondo2.jpeg"
            alt="Cristian & Daniela"
            fill
            priority
            className="object-cover object-center scale-105"
          />
        </div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* TEXTO */}
      <div className="relative z-10 text-[#3E4334] px-4 flex flex-col items-center">

      {/*  
        <p className="font-[family-name:var(--font-cormorant)] uppercase text-3xl md:text-5xl drop-shadow-md">
          Nuestra boda
        </p>

        <h1 className="flex flex-col items-center mt-8 drop-shadow-lg font-[family-name:var(--font-ms-madi)] italic">
          <span className="text-4xl md:text-6xl font-light tracking-widest my-4">
            Yeison Borja y
          </span>
          <span className="text-4xl mb-4 md:text-6xl font-light tracking-widest">
            Laura Nathalia Murcia
          </span>
        </h1>
        */}

        <div>
          <img
            src="/envelope/letras.png"
            className="w-100 h-40"
            alt="logo"
          />
        </div>

        {/* SEPARADOR */}
        <div className="flex items-center justify-center w-4/5 mx-auto my-2">
          <div className="flex-grow h-px bg-[#a64e1b5d]" />

          <span className="px-4 text-[#a64e1b5d] text-xl leading-none">♥</span>

          <div className="flex-grow h-px bg-[#a64e1b5d]/70" />
        </div>

        {/* FECHA */}
        <div className="mt-2 mb-6 flex items-center gap-4 text-lg md:text-xl font-[family-name:var(--font-pinyon)] tracking-[0.4em] drop-shadow-md">
          06 · 12 · 2026
        </div>

        {/* MENSAJE PARA ESCUCHAR LA CANCIÓN */}
        <div
          className="
            absolute
            top-[calc(100%+0.75rem)]
            flex
            items-center
            justify-center
            gap-2
            px-4
            py-2
            max-w-[90vw]
            rounded-full
            bg-black/25
            border
            border-white/20
            backdrop-blur-sm
            shadow-lg
            whitespace-nowrap
          "
        >
          <Music2 className="w-4 h-4 text-[#3E4334] shrink-0" />

          <span className="text-sm md:text-base text-[#3E4334] font-light tracking-wide text-center">
            Dale play para escuchar esta canción
          </span>
        </div>

        {/* REPRODUCTOR - POSICIÓN ORIGINAL */}
        <div
          className="
            mt-[18rem]
            md:mt-[15rem]
            min-[1600px]:mt-16
            flex
            items-center
            gap-4
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            px-5
            py-3
            rounded-full
            shadow-2xl
          "
        >

          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={handlePlayPause}
            aria-label={playing ? "Pausar canción" : "Reproducir canción"}
            aria-pressed={playing}
            className="
              w-12 h-12
              shrink-0
              rounded-full
              bg-[#3E4334]/20
              hover:bg-[#3E4334]/30
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              transition-all
              duration-300
              flex items-center justify-center
            "
          >
            {playing ? (
              <Pause className="w-5 h-5 text-[#3E4334]" />
            ) : (
              <Play className="w-5 h-5 text-[#3E4334] ml-1" />
            )}
          </button>

          {/* REINICIAR */}
          <button
            type="button"
            onClick={handleRestart}
            aria-label="Reiniciar canción"
            className="
              w-11 h-11
              shrink-0
              rounded-full
              bg-[#3E4334]
              hover:bg-[#3E4334]/20
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              transition-all
              duration-300
              flex items-center justify-center
            "
          >
            <RotateCcw className="w-4 h-4 text-white" />
          </button>

          {/* TEXTO */}
          <div className="flex flex-col leading-none min-w-0">
            <span className="text-xs uppercase tracking-[0.18em] text-[#3E4334]/70">
              {playing ? "Reproduciendo" : "Nuestra boda"}
            </span>

            <span className="text-sm md:text-base font-light tracking-wide whitespace-nowrap">
              Nuestra canción
            </span>
          </div>
        </div>
        
      </div>
      {/* ===================================================
         DESVANECIDO INFERIOR
      =================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-12
          bg-gradient-to-t
          from-white
          to-transparent
          z-10
          pointer-events-none
        "
      />
    </section>
  );
}

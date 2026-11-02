"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroEnvelopeMovil() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true);

    // Tiempo suficiente para la animación elegante
    setTimeout(() => {
      router.push("/invitacion");
    }, 400);
  };

  return (
    <>
      <style>{`
        html, body {
          overflow: hidden;
          height: 100%;
          margin: 0;
          background: #f4ede4;
        }

        .perspective-parent {
          perspective: 3000px;
        }

        /* TAPA SUAVE */
        .flap-3d {
          transform-origin: top center;
          transition:
            transform 2.4s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1.5s ease;
          z-index: 50;
          will-change: transform;
        }

        /* SE LEVANTA SOLO UN POCO */
        .flap-3d.open {
          transform: rotateX(55deg) translateY(-2%);
        }

        /* IMAGEN DETRÁS */
        .background-photo {
          transition:
            transform 2.6s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 2s ease,
            filter 2s ease;
        }

        .background-photo.show {
          transform: scale(1.03);
          opacity: 1;
          filter: blur(0px);
        }
      `}</style>

      <main className="fixed inset-0 w-full h-screen overflow-hidden bg-[#f4ede4]">

        <div
          onClick={handleOpen}
          className="relative w-full h-full cursor-pointer select-none perspective-parent overflow-hidden"
        >

          {/* SOBRE BASE */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <img
              src="/envelope/1_carta.png"
              alt="Sobre base"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* TAPA GRANDE */}
          <div
            className={`
              absolute
              top-[-14%]
              left-1/2
              -translate-x-1/2
              w-[260%]
              h-[72vh]
              pointer-events-none
              flap-3d
              ml-10
              mt-14
              ${isOpen ? "open" : ""}
            `}
          >
            <div className="relative w-full h-full">

              <img
                src="/envelope/2_hd_tapa.png"
                alt="Tapa"
                className="
                  w-full
                  h-full
                  object-contain
                  drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]
                "
              />

              {/* INICIALES */}
              <div
                className={`
                  absolute inset-0
                  flex items-center justify-center
                  transition-all duration-[1200ms]
                  ${isOpen ? "opacity-0 scale-90" : "opacity-100"}
                `}
              >
                <div className="translate-y-[-6vh]">
                  <img
                    src="/envelope/iniciales.png"
                    alt="Iniciales"
                    className="w-72 h-52 mr-18 mt-52 object-contain opacity-80"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* SELLO */}
          <div
            className={`
              absolute
              left-1/2
              top-[54%]
              -translate-x-1/2
              -translate-y-1/2
              z-[60]
              transition-all duration-[1000ms] ease-out
              flex flex-col items-center
              ${
                isOpen
                  ? "opacity-0 scale-75 pointer-events-none"
                  : "opacity-100 scale-100"
              }
            `}
          >
            <div className="relative flex flex-col items-center">

              {/* Imagen del sello */}
              <div
                className="
                  relative
                  w-54 h-54
                  flex items-center justify-center
                  drop-shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                "
              >
                <img
                  src="/envelope/sello.png"
                  alt="Sello"
                  className="
                    w-full h-full
                    object-contain
                    select-none
                    pointer-events-none
                    opacity-80
                  "
                />
              </div>

              {/* Texto */}
              <div
                className="
                  text-[#8c7a6b]
                  text-[10px]
                  font-bold
                  tracking-[0.45em]
                  uppercase
                  whitespace-nowrap
                  bg-[#faf8f5]/90
                  px-5 py-2
                  rounded-full
                  border border-[#e8dfd5]
                  shadow-lg
                "
              >
                Toca para abrir
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}
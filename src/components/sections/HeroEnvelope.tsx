"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true);

    setTimeout(() => {
      router.push("/invitacion");
    }, 500);
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          background: #f4ede4;
          overflow: hidden;
        }

        .perspective-parent {
          perspective: 3000px;
        }

        /* TAPA */
        .flap-3d {
          transform-origin: top center;
          transition:
            transform 2.2s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1.5s ease;
          will-change: transform;
          z-index: 40;
        }

        .flap-3d.open {
          transform: rotateX(58deg) translateY(-2%);
        }

        /* FOTO */
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

      <main className="min-h-screen bg-[#f4ede4] flex items-center justify-center px-6">

        {/* CONTENEDOR CENTRAL */}
        <div className="flex flex-col items-center">

        {/* SOBRE */}
        <div
          onClick={handleOpen}
          className="
            relative
            w-[340px]
            h-[620px]
            cursor-pointer
            select-none
            perspective-parent
            pb-10
          "
        >

          {/* BASE */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <img
              src="/envelope/1_carta.png"
              alt="Sobre"
              className="w-full h-full object-contain"
            />
          </div>

          {/* TAPA */}
          <div
            className={`
              absolute
              top-[-12%]
              left-1/2
              -translate-x-1/2
              w-[120%]
              h-[350px]
              pointer-events-none
              flap-3d
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
                    drop-shadow-[0_30px_45px_rgba(0,0,0,0.12)]
                  "
                />

                {/* INICIALES */}
                <div
                  className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-[1200ms]
                    ${
                      isOpen
                        ? "opacity-0 scale-90"
                        : "opacity-100 scale-100"
                    }
                  `}
                >
                  <img
                    src="/envelope/iniciales.png"
                    alt="Iniciales"
                    className="
                      w-32
                      object-contain
                      -mt-4
                    "
                  />
                </div>
              </div>
            </div>

            {/* SELLO */}
            <div
              className={`
                absolute
                left-1/2
                top-[55%]
                -translate-x-1/2
                -translate-y-1/2
                z-[60]
                transition-all
                duration-[1000ms]
                ease-out
                flex
                flex-col
                items-center
                ${
                  isOpen
                    ? "opacity-0 scale-75 pointer-events-none"
                    : "opacity-100 scale-100"
                }
              `}
            >
              <div className="relative flex flex-col items-center">

                {/* SELLO IMG */}
                <div
                  className="
                    relative
                    w-40
                    h-40
                    flex
                    items-center
                    justify-center
                    drop-shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                  "
                >
                  <img
                    src="/envelope/sello.png"
                    alt="Sello"
                    className="
                      w-full
                      h-full
                      object-contain
                      select-none
                      pointer-events-none
                    "
                  />
                </div>

                {/* TEXTO */}
                <div
                  className="
                    text-[#8c7a6b]
                    text-[11px]
                    font-bold
                    tracking-[0.45em]
                    uppercase
                    whitespace-nowrap
                    bg-[#faf8f5]/90
                    px-5
                    py-2
                    rounded-full
                    border
                    border-[#e8dfd5]
                    shadow-lg
                    mt-2
                  "
                >
                  Click para abrir
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
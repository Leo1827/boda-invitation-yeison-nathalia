"use client";

import { useState } from "react";

export default function DressCode() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full mx-auto px-4 py-16 font-sans text-neutral-800 overflow-hidden">
      {/* =====================================================
        IMAGEN DE FONDO
      ===================================================== */}
      <div className="absolute inset-0">

        {/* IMAGEN */}
        <img
          src="https://images.pexels.com/photos/13924590/pexels-photo-13924590.jpeg"
          alt=""
          className="
            w-full
            h-full
            object-cover
            scale-105
          "
        />

        {/* CAPA OSCURA */}
        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        {/* CAPA BEIGE SUAVE */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#00000030]
            via-[#00000020]
            to-[#00000050]
          "
        />
      </div>
      {/* =====================================================
         BOTÓN PRINCIPAL
      ===================================================== */}
      <div className="flex justify-center">

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="
            group
            relative
            flex
            flex-col
            items-center
            justify-center
            px-10
            md:px-16
            py-7
            border
            border-[#d8c6b3]
            bg-[#fcfaf7]/80
            backdrop-blur-sm
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            transition-all
            duration-500
            rounded-[2rem]
            overflow-hidden
          "
        >

          {/* Glow suave */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-700
              bg-gradient-to-r
              from-[#f5eee6]
              via-transparent
              to-[#f5eee6]
            "
          />

          {/* SUBTÍTULO */}
          <span
            className="
              relative
              z-10
              uppercase
              tracking-[0.35em]
              text-[11px]
              md:text-xs
              text-[#b48b67]
              font-light
            "
          >
            Código de Vestimenta
          </span>

          {/* TÍTULO */}
          <h2
            className="
              relative
              z-10
              mt-3
              text-3xl
              md:text-5xl
              text-[#4A4A4A]
              font-light
              leading-none
              flex
              items-center
              gap-3
              font-[family-name:var(--font-cormorant)]
            "
          >

            <span className="font-[family-name:var(--font-pinyon)] italic ">
              Boda en la Playa
            </span>
          </h2>

          {/* FLECHA */}
          <div
            className="
              relative
              z-10
              mt-6
              flex
              items-center
              justify-center
              transition-transform
              duration-500
            "
          >
            <svg
              className={`
                w-5
                h-5
                text-[#B47C54]
                transition-transform
                duration-500
                ${isOpen ? "rotate-180" : "rotate-0"}
              `}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </button>
      </div>

      {/* =====================================================
         CONTENIDO DESPLEGABLE
      ===================================================== */}
      <div
        className={`
          grid
          overflow-hidden
          transition-all
          duration-700
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-14"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }
        `}
      >
        <div className="overflow-hidden">

          {/* CONTENEDOR */}
          <div
            className="
              border
              border-[#ece3da]
              bg-[#fcfaf7]/70
              backdrop-blur-sm
              shadow-[0_10px_50px_rgba(0,0,0,0.03)]
              rounded-[2.5rem]
              p-6
              md:p-12
            "
          >

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

              {/* DIVISOR */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#e9ddd1] -translate-x-1/2" />

              {/* =================================================
                 CABALLEROS
              ================================================= */}
              <div className="space-y-7">

                {/* HEADER */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#ece3da]">

                  {/* ICONO */}
                  <div className="w-11 h-11 rounded-full border border-[#dcc7b1] flex items-center justify-center">

                    <svg
                      className="w-5 h-5 text-[#B47C54] stroke-[1.2]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M4 3h16l-3 9H7L4 3z" />
                      <path d="M12 3v18M7 12v9m10-9v9" />
                    </svg>
                  </div>

                  <h3
                    className="
                      text-3xl
                      text-[#4A4A4A]
                      font-light
                      font-[family-name:var(--font-cormorant)]
                    "
                  >
                    <span className="italic">Caballeros</span>
                  </h3>
                </div>

                {/* TEXTO */}
                <div className="space-y-5 text-[15px] text-neutral-600 leading-relaxed font-light">

                  <div>
                    <p className="uppercase tracking-[0.25em] text-[11px] text-[#B47C54] mb-4">
                      Permitido & sugerido
                    </p>

                    <ul className="space-y-3">

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Formal de playa / Semi-formal</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Traje ligero o pantalón de vestir con saco</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Camisa formal o guayabera elegante</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Corbata opcional</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Todos los colores y patrones son bienvenidos</span>
                      </li>
                    </ul>
                  </div>

                  {/* EVITAR */}
                  <div className="pt-2">

                    <p className="uppercase tracking-[0.25em] text-[11px] text-[#B47C54] mb-4">
                      A evitar
                    </p>

                    <div className="space-y-2 text-sm text-neutral-500">

                      <div className="flex items-center gap-2">
                        <span className="text-red-300">✕</span>
                        <span className="line-through">
                          No jeans
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-red-300">✕</span>
                        <span className="line-through">
                          No camisas hawaianas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                 DAMAS
              ================================================= */}
              <div className="space-y-7">

                {/* HEADER */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#ece3da]">

                  {/* ICONO */}
                  <div className="w-11 h-11 rounded-full border border-[#dcc7b1] flex items-center justify-center">

                    <svg
                      className="w-5 h-5 text-[#B47C54] stroke-[1.2]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M8 3h8l2 5-3 3v10H9V11L6 8l2-5z" />
                    </svg>
                  </div>

                  <h3
                    className="
                      text-3xl
                      text-[#4A4A4A]
                      font-light
                      font-[family-name:var(--font-cormorant)]
                    "
                  >
                    <span className="italic">Damas</span>
                  </h3>
                </div>

                {/* TEXTO */}
                <div className="space-y-5 text-[15px] text-neutral-600 leading-relaxed font-light">

                  <div>
                    <p className="uppercase tracking-[0.25em] text-[11px] text-[#B47C54] mb-4">
                      Permitido & sugerido
                    </p>

                    <ul className="space-y-3">

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Formal veraniego / Summer chic</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Vestidos largos o midi, telas ligeras y elegantes</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#B47C54]">✓</span>
                        <span>Colores vivos, tropicales o estampados</span>
                      </li>
                    </ul>
                  </div>

                  {/* RESTRICCIÓN */}
                  <div className="pt-2">

                    <p className="uppercase tracking-[0.25em] text-[11px] text-[#B47C54] mb-4">
                      Restricción especial
                    </p>

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        bg-[#f5eee6]
                        border-l-2
                        border-[#c7a17a]
                        p-4
                        text-sm
                        text-neutral-700
                      "
                    >
                      <span className="italic text-[#B47C54]">
                        i
                      </span>

                      <p>
                        <span className="text-neutral-900">
                          No color blanco:
                        </span>{" "}
                        reservado exclusivamente para la novia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-14 pt-8 border-t border-[#ece3da] text-center">

              <p
                className="
                  text-lg
                  md:text-xl
                  text-[#4A4A4A]
                  font-light
                  leading-relaxed
                  font-[family-name:var(--font-cormorant)]
                "
              >
                <span className="italic">
                  La idea es un look elegante pero fresco,
                </span>{" "}
                acorde a una boda en{" "}
                <span className="italic">
                  La Guajira
                </span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
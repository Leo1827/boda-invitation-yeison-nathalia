"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* =========================================================
   DATA
========================================================= */
const locations = [
  {
    title: "CEREMONIA",
    time: "4:00 PM",
    place: "Iglesia de Santa Cruz",
    mapUrl: "#",
    icon: (
      <svg
        viewBox="0 0 28 28"
        fill="none"
        stroke="#B47C54"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-14 h-14"
      >
        <path d="M12 2v3m-2-1.5h4" />
        <path d="M12 5L5 11v11h14V11L12 5z" />
        <path d="M10 22v-4a2 2 0 0 1 4 0v4" />
        <path d="M12 11v2" />
      </svg>
    ),
  },
  {
    title: "RECEPCIÓN",
    time: "6:00 PM",
    place: "Hacienda San Nicolás",
    mapUrl: "#",
    icon: (
      <svg
        viewBox="0 0 28 28"
        fill="none"
        stroke="#B47C54"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-14 h-14"
      >
        <path d="M8 16c1.5 0 3-1 3-3.5V4H5v8.5C5 15 6.5 16 8 16z" />
        <path d="M8 16v5m-3 0h6" />

        <path d="M16 16c-1.5 0-3-1-3-3.5V4h6v8.5c0 2.5-1.5 3.5-3 3.5z" />
        <path d="M16 16v5m-3 0h6" />

        <path
          d="M12 7c0-1 1-1.5 1.5-0.5.5-1 1.5-0.5 1.5.5 0 1-1.5 2-1.5 2s-1.5-1-1.5-2z"
          fill="#B47C54"
          stroke="none"
        />
      </svg>
    ),
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Location() {

  /* =======================================================
     STATE - CONTROLA EL MODAL
  ======================================================= */
  const [openModal, setOpenModal] = useState(false);

  /* =======================================================
     FUNCTIONS
  ======================================================= */

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* =====================================================
         SECTION
      ===================================================== */}
      <section className="relative w-full py-32 font-[family-name:var(--font-cormorant)] px-4 bg-[#F5F2ED] overflow-hidden min-h-[400px] flex flex-col items-center justify-center">

        {/* ===================================================
           PALMERAS DECORATIVAS
        =================================================== */}
        <div className="absolute -top-8 -left-18 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none rotate-50">
          <img
            src="/envelope/palmera1.png"
            alt=""
            className="object-contain w-full h-full 
                      sepia-[0.25]
                      saturate-[0.65]
                      brightness-[1.08]
                      contrast-[0.88]
                      hue-rotate-[2deg]
                      opacity-30"
          />
        </div>

        <div className="absolute top-0 -right-18 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none rotate-180">
          <img
            src="/envelope/palmera2.png"
            alt=""
            className="object-contain w-full h-full
                      sepia-[0.25]
                      saturate-[0.65]
                      brightness-[1.08]
                      contrast-[0.88]
                      hue-rotate-[2deg]
                      opacity-30"
          />
        </div>

        <div className="absolute bottom-0 -right-24 w-48 h-48 md:w-64 md:h-64 opacity-70 mr-8 pointer-events-none">
          <img
            src="/envelope/hojas_palmera.png"
            alt=""
            className="object-contain w-full h-full rotate-190"
          />
        </div>

        <div className="absolute top-52 mt-32 md:top-52 left-0 rotate-8 w-32 h-32 md:w-64 md:h-[680px] opacity-50 pointer-events-none">
          <img
            src="/envelope/hojas_palmera.png"
            alt=""
            className="object-contain w-full md:h-full h-[900px]"
          />
        </div>

        {/* ===================================================
           TÍTULO PRINCIPAL
        =================================================== */}
        <div className="relative z-10 text-center mb-4">
          <span className="text-[#B47C54] font-[family-name:var(--font-pinyon)] italic tracking-[0.3em] text-sm md:text-3xl block font-light">
            Donde comienza nuestra historia
          </span>

          <h1 className="text-4xl md:text-6xl font-light italic text-[#4A4A4A] serif">
            Riohacha - La Guajira
          </h1>

          <div className="w-24 h-[1px] bg-[#B47C54] mx-auto mt-3 opacity-50"></div>
        </div>

        {/* ===================================================
           IMAGEN PRINCIPAL
        =================================================== */}
        <div className="relative z-10 w-full pb-10 px-4 md:px-12">
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">

            {/* 
              IMPORTANTE:
              Al darle click a la imagen abre el modal
            */}
            <img
              src="/envelope/guajira8.png"
              alt="Riohacha - La Guajira"
              onClick={handleOpenModal}
              className="
                w-full
                h-92
                md:h-[500px]
                object-contain
                block
                cursor-pointer
              "
            />

            {/* =================================================
               TEXTO SOBRE IMAGEN
            ================================================= */}
            <div className="absolute bottom-6 md:top-32 top-16 mt-38 md:mt-10 right-2 md:right-10 text-black">

              <p className="font-[family-name:var(--font-pinyon)] text-xl md:text-4xl opacity-80">
                Lugar
              </p>

              <h3 className="text-2xl md:text-5xl font-light italic">
                Riohacha - La Guajira
              </h3>

              <p className="text-sm md:text-lg opacity-90">
                Ecohotel Akuaipa, Playa Valle de los Cangrejos
              </p>

              {/* 
                BOTÓN QUE ABRE EL MODAL
              */}
              <button
                onClick={handleOpenModal}
                className="bg-[#A3A786] hover:shadow-2xl shadow-xl rounded-sm my-2 p-1 px-8 text-white"
              >
                Ver mapa
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
           INFO UBICACIONES
        =================================================== */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-62 relative z-10">
          {locations.map((loc, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Icono */}
              <div className="opacity-80 mb-2">{loc.icon}</div>

              {/* Título */}
              <h2 className="text-2xl md:text-3xl font-light leading-2 uppercase mt-2 text-[#B47C54] mb-1">
                {loc.title}
              </h2>

              {/* Hora */}
              <div className="space-y-2 mb-2 font-light text-[#4A4A4A]">
                <p className="text-2xl font-[family-name:var(--font-pinyon)]">{loc.time}</p>
              </div>

            </div>
          ))}
        </div>

        {/* ===================================================
           DECORACIONES
        =================================================== */}
        <div className="absolute left-0 bottom-0 w-32 h-64 md:w-48 md:h-96 opacity-40 pointer-events-none" />

        <div className="absolute right-0 bottom-0 w-32 h-64 md:w-48 md:h-96 opacity-40 pointer-events-none transform scale-x-[-1]" />

        {/* ===================================================
           DESVANECIDO INFERIOR
        =================================================== */}
        <div
          className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#deb98860] via-[#f3f0e9]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
        MODAL GOOGLE MAPS
      ===================================================== */}
      {openModal &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-[999999]
              flex
              items-center
              justify-center
              bg-black/70
              p-4
            "
          >
            {/* CONTENEDOR MODAL */}
            <div
              className="
                relative
                w-full
                max-w-5xl
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-2xl
              "
            >

              {/* BOTÓN CERRAR */}
              <button
                onClick={handleCloseModal}
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  text-black
                  text-xl
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                ✕
              </button>

              {/* GOOGLE MAPS */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d92958.81731240061!2d-72.905358798641!3d11.54416120628057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzM5LjciTiA3MsKwNTMnMjEuNiJX!5e1!3m2!1ses-419!2sco!4v1783352476975!5m2!1ses-419!2sco"
                
                className="w-full h-[75vh]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
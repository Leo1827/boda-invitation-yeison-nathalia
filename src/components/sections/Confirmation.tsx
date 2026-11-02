"use client";

import { useState } from "react";

export default function Confirmation() {
  const whatsappNumber = "573118557692"; // TU NÚMERO

  const handleWhatsAppConfirm = () => {
    const message = `
  Hola ✨

  Deseo confirmar mi asistencia.
  Será un honor acompañarlos en este día tan especial 🤍
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  /* =====================================================
     ENVIAR CONFIRMACIÓN
  ===================================================== */
  const handleSubmit = async () => {
    await fetch("/api/confirm", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    alert("Confirmado");
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* ===================================================
         OVERLAY OSCURO
      =================================================== */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* ===================================================
         LÍNEAS DECORATIVAS
      =================================================== */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] z-20">

        <svg
          viewBox="0 0 1440 160"
          className="w-full h-32"
          preserveAspectRatio="none"
        >

          {/* Línea 1 */}
          <path
            d="M0,90 C300,40 1100,150 1440,80"
            fill="none"
            stroke="#bfa880"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Línea 2 */}
          <path
            d="M0,60 C400,130 900,10 1440,100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* Línea 3 */}
          <path
            d="M0,110 C500,20 1000,180 1440,70"
            fill="none"
            stroke="#a8c0b8"
            strokeWidth="4"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ===================================================
         FORMA SUPERIOR
      =================================================== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-20">

        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>

      {/* ===================================================
         FONDO PRINCIPAL
      =================================================== */}
      <div
        className="
          relative
          h-[550px]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage: "url('/envelope/image_10.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* =================================================
           CONTENIDO
        ================================================= */}
        <div className="relative z-30 text-center text-white px-6 max-w-4xl">

          {/* =================================================
             ICONO CALENDARIO
          ================================================= */}
          <div className="flex justify-center">

            <svg
              className="w-16 h-16 text-[#bfa880] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* =================================================
             FORMULARIO
          ================================================= */}
          <div className="mt-6 flex flex-col items-center gap-5">
            
            {/* BOTÓN */}
            <button
              onClick={handleWhatsAppConfirm}
              className="
                group
                relative
                overflow-hidden
                bg-[#bfa880]
                hover:bg-[#a88f6c]
                bg-white/20
                border
              border-white/30
                text-white/60
                text-black
                px-10
                py-4
                rounded-full
                shadow-2xl
                transition-all
                duration-500
                hover:scale-105
                font-light
                tracking-[0.15em]
                uppercase
                flex
                items-center
                gap-3
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
              />

              <span className="relative z-10">
                Confirmar asistencia
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
         FORMA INFERIOR
      =================================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">

        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
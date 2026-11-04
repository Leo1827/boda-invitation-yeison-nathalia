"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* =========================================================
   DATA
========================================================= */
const locations = [
  {
    title: "CEREMONIA",
    date: "6 DE DICIEMBRE",
    time: "5:40 PM",
    place: "Parroquia del Espíritu Santo",
    mapUrl: "#",
    icon: (
      <svg
        viewBox="0 0 28 28"
        fill="none"
        stroke="#556038"
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
    date: "6 DE DICIEMBRE",
    time: "7:00 PM",
    place: "Finca Terra Viva",
    address: "Kilómetro 3 vía Palestina",
    mapUrl: "#",
    icon: (
      <svg
        viewBox="0 0 28 28"
        fill="none"
        stroke="#556038"
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

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const galleryImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcxxaylEVNk6oA8Il78_4yqkNwoJSBXtILrsJlGVwsbK3vOB0WjkwYy0&s=10",
      alt: "Vista de las instalaciones de la finca turística Terra Viva",
    },
    {
      src: "https://www.laspaginasamarillasencolombia.com/wp-content/uploads/elementor/thumbs/448212042_986696590132195_8504718402579062202_n-qt6ivqlaeecgubkkx4vaypbs2gwp6zhro8dyufy070.jpg",
      alt: "Espacios naturales de la finca turística Terra Viva",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyDUVpgjV8TIZ5WiBS_MMtqeJKjseCoY2qqRNB9YqWo0ff29WJO2Ef8rp&s=10",
      alt: "Espacios naturales de la finca turística Terra Viva",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1_HnBaZjrn9EY4aN7iHgeQwbZHiGuxqpdi5hLRBZVHb7xr9ceB9xR-k&s=10",
      alt: "Espacios naturales de la finca turística Terra Viva",
    },
  ];

  /* =======================================================
     FUNCTIONS
  ======================================================= */

  const handleOpenModal = () => {
    setCurrentPhoto(0);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (!openModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal]);
  return (
    <>
      {/* =====================================================
         SECTION
      ===================================================== */}
      <section className="relative w-full py-32 font-[family-name:var(--font-cormorant)] px-4 bg-[#F5F2ED] overflow-hidden min-h-[400px] flex flex-col items-center justify-center">

        {/* ===================================================
           flores DECORATIVAS
        =================================================== */}
        <div className="absolute -top-8 -left-18 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none rotate-50">
          <img
            src="/envelope/flores/flor3.png"
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
            src="/envelope/flores/flor1.png"
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
            src="/envelope/flores/flor2.png"
            alt=""
            className="object-contain w-full h-full rotate-190"
          />
        </div>

        <div className="absolute top-52 mt-32 md:top-52 left-0 rotate-8 w-32 h-32 md:w-64 md:h-[680px] opacity-50 pointer-events-none">
          <img
            src="/envelope/flores/flor2.png"
            alt=""
            className="object-contain w-full md:h-full h-[900px]"
          />
        </div>

        {/* ===================================================
           TÍTULO PRINCIPAL
        =================================================== */}
        <div className="relative z-10 text-center mb-4">
          <span className="text-[#946442] font-[family-name:var(--font-pinyon)] italic tracking-[0.3em] text-2xl md:text-3xl block font-bold">
            Donde comienza nuestra historia
          </span>

          <h1 className="text-4xl md:text-6xl font-light italic text-[#556038] serif">
            Pitalito - Huila
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
              src="/envelope/huila.png"
              alt="Pitalito - Huila"
              onClick={handleOpenModal}
              className="
                w-full
                h-92
                md:h-[500px]
                object-contain
                block
                cursor-pointer
                md:pr-0
                pr-14
              "
            />

            {/* =================================================
               TEXTO SOBRE IMAGEN
            ================================================= */}
            <div className="absolute bottom-6 md:top-32 top-18 mt-38 md:mt-10 right-2 md:right-10 text-[#556038]">

              <p className="font-[family-name:var(--font-pinyon)] font-bold text-xl md:text-4xl opacity-80">
                Lugar de Recepción
              </p>

              <h3 className="text-2xl md:text-5xl font-light italic">
                Pitalito - Huila
              </h3>

              <p className="text-sm font-bold md:text-lg opacity-90">
                Finca turística Terra viva
              </p>

              {/* 
                BOTÓN QUE ABRE EL MODAL
              */}
              <button
                onClick={handleOpenModal}
                className="bg-[#556038] hover:shadow-2xl shadow-xl rounded-sm my-2 p-1 px-8 text-white"
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

              {/* Lugar */}
              <p className="text-lg md:text-xl font-light text-[#4A4A4A] mb-1">
                {loc.place}
              </p>

              {/* Dirección, si existe */}
              {loc.address && (
                <p className="text-sm md:text-base text-[#4A4A4A] mb-2">
                  {loc.address}
                </p>
              )}

              {/* Hora */}
              <div className="mb-2 font-light text-[#4A4A4A]">
                <p className="text-2xl font-[family-name:var(--font-pinyon)]">
                  {loc.time}
                </p>
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

{/* MODAL DE UBICACIÓN Y GALERÍA */}
{openModal &&
  typeof window !== "undefined" &&
  createPortal(
      <div
        className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 p-3 sm:p-5"
        onClick={handleCloseModal}
        role="presentation"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terra-viva-title"
          className="relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#FDFBF8] shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          {/* ENCABEZADO */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#B47C54]/20 px-4 py-3 sm:px-6 sm:py-4">
            <div>
              <p className="font-[family-name:var(--font-pinyon)] text-sm italic text-[#B47C54] sm:text-base">
                Celebremos juntos
              </p>

              <h2
                id="terra-viva-title"
                className="text-xl font-light text-[#4A4A4A] sm:text-2xl"
              >
                Finca Terra Viva
              </h2>

              <p className="text-xs text-[#777] sm:text-sm">
                Pitalito, Huila · Kilómetro 3 vía Palestina
              </p>
            </div>

            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Cerrar ventana de ubicación"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0E8DE] text-xl text-[#76563F] transition hover:bg-[#E4D3C0]"
            >
              ×
            </button>
          </div>

          {/* CONTENIDO CON DESPLAZAMIENTO */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">

            {/* MAPA */}
            <div className="relative">
              <iframe
                title="Mapa de ubicación de Finca Terra Viva"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626552.1879695386!2d-76.1428847355892!3d1.8710394409414624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e250b91782d95a5%3A0x72a46bbd1efae31b!2sTERRA%20VIVA!5e1!3m2!1ses-419!2sco!4v1793674530605!5m2!1ses-419!2sco"
                className="block h-[32dvh] min-h-[190px] w-full sm:h-[38dvh] sm:min-h-[260px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://www.google.com/maps/search/?api=1&query=Finca+Terra+Viva+Pitalito+Huila"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs text-[#76563F] shadow-md transition hover:bg-white sm:text-sm"
              >
                <span aria-hidden="true">↗</span>
                Abrir en Google Maps
              </a>
            </div>

            {/* GALERÍA FOTOGRÁFICA */}
            <section className="px-4 py-5 sm:px-6 sm:py-6">
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-1 font-[family-name:var(--font-pinyon)] text-lg italic text-[#B47C54] sm:text-xl">
                    Un lugar especial
                  </p>

                  <h3 className="text-xl font-light text-[#4A4A4A] sm:text-2xl">
                    Descubre el lugar
                  </h3>

                  <p className="mt-1 text-xs text-[#888] sm:text-sm">
                    Conoce un poco del lugar donde celebraremos.
                  </p>
                </div>

                {/* CONTROLES DEL CARRUSEL */}
                <div className="flex shrink-0 items-center gap-2">
                  <span className="mr-1 text-xs text-[#777]">
                    {currentPhoto + 1} / {galleryImages.length}
                  </span>

                  <button
                    type="button"
                    aria-label="Ver fotografía anterior"
                    onClick={() =>
                      setCurrentPhoto(
                        (currentPhoto - 1 + galleryImages.length) %
                          galleryImages.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B47C54]/30 text-lg text-[#76563F] transition hover:bg-[#F0E8DE]"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    aria-label="Ver fotografía siguiente"
                    onClick={() =>
                      setCurrentPhoto(
                        (currentPhoto + 1) % galleryImages.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B47C54]/30 text-lg text-[#76563F] transition hover:bg-[#F0E8DE]"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* IMAGEN ACTIVA */}
              <div className="relative overflow-hidden rounded-xl bg-[#F0E8DE]">
                <img
                  key={galleryImages[currentPhoto].src}
                  src={galleryImages[currentPhoto].src}
                  alt={galleryImages[currentPhoto].alt}
                  className="block h-[220px] w-full object-cover sm:h-[300px] md:h-[340px]"
                />
              </div>

              {/* INDICADORES */}
              <div className="mt-3 flex justify-center gap-2">
                {galleryImages.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    aria-label={`Ver fotografía ${index + 1}`}
                    aria-current={currentPhoto === index ? "true" : undefined}
                    onClick={() => setCurrentPhoto(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentPhoto === index
                        ? "w-8 bg-[#B47C54]"
                        : "w-3 bg-[#B47C54]/30 hover:bg-[#B47C54]/60"
                    }`}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* PIE DEL MODAL */}
          <div className="shrink-0 border-t border-[#B47C54]/15 bg-[#FDFBF8] px-4 py-3 text-center sm:px-6">
            <p className="text-xs text-[#777] sm:text-sm">
              Nos encantará compartir este día contigo.
            </p>
          </div>
        </div>
      </div>,
      document.body
      )}

    </>
  );
}
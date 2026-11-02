"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftSection() {

  /* =========================================================
     STATE
  ========================================================= */
  const [openModal, setOpenModal] = useState(false);

  /* =========================================================
     FUNCTIONS
  ========================================================= */
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
      <section className="relative w-full pt-8 pb-20 px-6 bg-[#F5F2ED] overflow-hidden">

        {/* CONTENIDO */}
        <div className="max-w-3xl mx-auto text-center">

          {/* SUBTÍTULO */}
          <span className="block text-[#B47C54] text-4xl md:text-4xl tracking-[0.3em] font-[family-name:var(--font-pinyon)] italic font-light">
            Regalos
          </span>

          {/* ICONO / BOTÓN */}
          <button
            onClick={handleOpenModal}
            className="
              group
              mt-4
              flex
              flex-col
              items-center
              justify-center
              mx-auto
              transition
              duration-300
            "
          >

            {/* ICONO REGALO */}
            <div
              className="
                w-24
                h-24
                rounded-full
                border
                border-[#C7A17A]
                flex
                items-center
                justify-center
                bg-white/70
                backdrop-blur-sm
                shadow-sm
                group-hover:scale-105
                transition
                duration-300
              "
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B47C54"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" />
                <path d="M21 7H3v5h18V7z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
              </svg>
            </div>

            {/* TEXTO */}
            <span className="my-5 text-[#B47C54] tracking-[0.25em] uppercase text-sm">
              Ver mensaje
            </span>
          </button>

          {/* TÍTULO */}
          <h2 className="text-4xl mx-3 md:text-6xl italic font-light text-[#4A4A4A] mb-8 font-[family-name:var(--font-cormorant)]">
            Su presencia es nuestro mejor regalo
          </h2>
        </div>

    {/* =====================================================
      DESVANECIDO HACIA BLANCO
    ===================================================== */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        pointer-events-none
        bg-gradient-to-b
        from-transparent
        via-[#F5F2ED]
        to-white
        z-10
      "
    />
      </section>

      {/* =====================================================
         MODAL
      ===================================================== */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {openModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="
                  fixed
                  inset-0
                  z-[999999]
                  bg-black/50
                  backdrop-blur-[3px]
                  flex
                  items-center
                  justify-center
                  p-4
                "
              >

                {/* CONTENEDOR */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    w-full
                    max-w-2xl
                    bg-[#FDFBF8]
                    rounded-[2rem]
                    shadow-2xl
                    px-8
                    py-16
                    text-center
                    overflow-hidden
                  "
                >

                  {/* BOTÓN CERRAR */}
                  <button
                    onClick={handleCloseModal}
                    className="
                      absolute
                      top-5
                      right-5
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      shadow-md
                      text-[#4A4A4A]
                      text-xl
                      transition
                      hover:scale-105
                    "
                  >
                    ✕
                  </button>

                  {/* ICONO */}
                  <div
                    className="
                      w-20
                      h-20
                      mx-auto
                      rounded-full
                      border
                      border-[#D8B89A]
                      flex
                      items-center
                      justify-center
                      mb-8
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B47C54"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" />
                      <path d="M21 7H3v5h18V7z" />
                      <path d="M12 22V7" />
                      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  </div>

                  {/* TEXTO */}
                  <p
                    className="
                      text-2xl
                      md:text-4xl
                      italic
                      leading-relaxed
                      text-[#4A4A4A]
                      font-light
                      font-[family-name:var(--font-cormorant)]
                    "
                  >
                    Lluvia de sobres
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
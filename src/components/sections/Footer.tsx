"use client";

export default function FooterSection() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
      "
    >

      {/* ===================================================
         LÍNEAS DECORATIVAS SUPERIORES
      =================================================== */}
      <div className="absolute top-0 left-0 w-full opacity-70 z-20">

        <svg
          viewBox="0 0 1440 250"
          className="w-full h-48"
          preserveAspectRatio="none"
        >

          <path
            fill="none"
            stroke="#bfa880"
            strokeWidth="3"
            d="M0,150 C300,60 1100,220 1440,130"
          />

          <path
            fill="none"
            stroke="#a8c0b8"
            strokeWidth="2.5"
            d="M0,120 C400,200 900,40 1440,140"
          />

          <path
            fill="none"
            stroke="#bfa880"
            strokeWidth="2"
            d="M0,170 C350,100 1000,200 1440,110"
          />

          <path
            fill="none"
            stroke="#a8c0b8"
            strokeWidth="1.8"
            d="M0,100 C500,180 800,60 1440,160"
          />

          <path
            fill="none"
            stroke="#bfa880"
            strokeWidth="2.2"
            d="M0,180 C450,120 900,220 1440,150"
          />
        </svg>
      </div>
      {/* ===================================================
        FONDO PRINCIPAL
      =================================================== */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            will-change-transform
            scale-110
            parallax-mobile
            sepia-[0.28]
            saturate-[0.75]
            brightness-[0.82]
            contrast-[0.9]
            hue-rotate-[-8deg]
          "
          style={{
            backgroundImage: "url('/envelope/image_5.webp')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/30 z-10" />
      </div>

      {/* ===================================================
         DESVANECIDO SUPERIOR
      =================================================== */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-40
          bg-gradient-to-b
          from-white
          via-white/70
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* ===================================================
         CONTENIDO
      =================================================== */}
      <div
        className="
          relative
          z-30
          flex
          flex-col
          items-center
          justify-center
          min-h-screen
          text-center
          px-2
        "
      >

        {/* TÍTULO */}
        <h1
          className="
            text-6xl
            md:text-8xl
            font-light
            tracking-[0.2em]
            mb-10
            bg-gradient-to-r
            from-[#bfa880]
            via-[#333]
            to-[#a8c0b8]
            text-transparent
            bg-clip-text
            drop-shadow-lg
            font-[family-name:var(--font-cormorant)]
          "
        >
          BODA
        </h1>

        {/* NOMBRES */}
        <p
          className="
            mt-4
            text-2xl
            md:text-5xl
            text-gray-900
            tracking-[0.3em]
            drop-shadow-sm
            font-light
            font-[family-name:var(--font-cormorant)]
            italic
          "
        >
          <span className="flex justify-center mb-14">Invitan</span>
          Yeison Urbano Urbano 
          <span className="block md:text-4xl text-xl">Laura Nathalia Murcia Hoyos</span>
        </p>
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
          h-32
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
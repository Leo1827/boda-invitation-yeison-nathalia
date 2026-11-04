
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Confirmation() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [companions, setCompanions] = useState("0");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const supabase = createClient();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!name.trim()) {
      setFeedback("Por favor, escribe tu nombre completo.");
      return;
    }

    setLoading(true);
    setFeedback("");

    // Abrimos una pestaña durante el clic para evitar
    // que el navegador bloquee la apertura de WhatsApp.
    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      // 1. PREPARAR INFORMACIÓN
      const isAttending = attendance === "yes";

      const guestData = {
        nombre: name.trim(),
        asistencia: isAttending,
        acompanantes: isAttending ? Number(companions) : 0,
        mensaje: message.trim() || null,
      };

      // 2. GUARDAR EN SUPABASE
      const { error } = await supabase
        .from("confirmaciones")
        .insert(guestData);

      if (error) {
        console.error("Error Supabase:", error);
        throw new Error("No pudimos registrar tu confirmación. Inténtalo nuevamente.");
      }

      // 3. CONSTRUIR MENSAJE DE WHATSAPP
      let whatsappMessage = "";

      if (isAttending) {
        const totalPeople = 1 + Number(companions);

        whatsappMessage = `
  ¡Hola! ✨

  Soy ${name.trim()}.

  ¡Confirmo mi asistencia a su boda! 🤍

  ${Number(companions) > 0
    ? `Asistiré con ${companions} acompañante(s). Total de personas: ${totalPeople}.`
    : "Asistiré personalmente."}

  ${message.trim() ? `\nMensaje para los novios:\n${message.trim()}` : ""}

  ¡Será un honor acompañarlos en este día tan especial! 💍
        `;
      } else {
        whatsappMessage = `
  ¡Hola! ✨

  Soy ${name.trim()}.

  Lamento informarles que no podré asistir a su boda. 🤍

  Les deseo mucha felicidad en esta nueva etapa.

  ¡Un abrazo!
        `;
      }

      // 4. ABRIR WHATSAPP
      const whatsappNumber = "573133822769"; // Número de WhatsApp de los novios

      const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      setFeedback("¡Tu respuesta quedó registrada! Gracias por acompañarnos. 🤍");

      // Limpiar formulario
      setName("");
      setAttendance("yes");
      setCompanions("0");
      setMessage("");

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }

    } catch (error) {
      whatsappWindow?.close();

      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al registrar tu respuesta."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* LÍNEAS DECORATIVAS */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg viewBox="0 0 1440 160" className="w-full h-32" preserveAspectRatio="none">
          <path d="M0,90 C300,40 1100,150 1440,80" fill="none" stroke="#bfa880" strokeWidth="3" opacity="0.6" />
          <path d="M0,60 C400,130 900,10 1440,100" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
          <path d="M0,110 C500,20 1000,180 1440,70" fill="none" stroke="#a8c0b8" strokeWidth="4" opacity="0.5" />
        </svg>
      </div>

      {/* FORMA SUPERIOR */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-20">
        <svg viewBox="0 0 1440 120" className="block w-full h-24" preserveAspectRatio="none">
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>

      {/* FONDO */}
      <div
        className="relative min-h-[850px] bg-cover bg-center flex items-center justify-center py-36 px-5"
        style={{
          backgroundImage: "url('/back/fondo.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* CONTENIDO */}
        <div className="relative z-30 w-full max-w-xl mx-auto text-white">

          {/* ENCABEZADO */}
          <div className="text-center mb-9">

            <div className="flex justify-center mb-5">
              <svg
                className="w-14 h-14 text-[#bfa880]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <p className="text-[#d6c09b] text-xs tracking-[0.35em] uppercase mb-3">
              Un día para recordar
            </p>

            <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em]">
              ¿Nos acompañas?
            </h2>

            <div className="w-16 h-px bg-[#bfa880] mx-auto my-5" />

            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto">
              Nos haría muy felices compartir contigo este momento tan
              especial. Confirma tu asistencia.
            </p>
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-9 shadow-2xl space-y-6"
          >

            {/* NOMBRE */}
            <div className="space-y-2">
              <label className="block text-xs tracking-[0.18em] uppercase text-[#d6c09b]">
                Nombre completo
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe tu nombre"
                required
                maxLength={100}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none focus:border-[#bfa880] focus:bg-white/15 transition"
              />
            </div>

            {/* ASISTENCIA */}
            <div className="space-y-3">
              <label className="block text-xs tracking-[0.18em] uppercase text-[#d6c09b]">
                ¿Podrás acompañarnos?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setAttendance("yes")}
                  className={`rounded-xl border p-4 text-sm transition-all duration-300 ${
                    attendance === "yes"
                      ? "border-[#556038] bg-[#556038]/20 text-white"
                      : "border-white/20 bg-white/5 text-white/60 hover:border-white/50"
                  }`}
                >
                  <span className="block text-2xl mb-2"></span>
                  ¡Sí, allí estaré!
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAttendance("no");
                    setCompanions("0");
                  }}
                  className={`rounded-xl border p-4 text-sm transition-all duration-300 ${
                    attendance === "no"
                      ? "border-[#556038] bg-[#556038]/20 text-white"
                      : "border-white/20 bg-white/5 text-white/60 hover:border-white/50"
                  }`}
                >
                  <span className="block text-2xl mb-2"></span>
                  No podré asistir
                </button>

              </div>
            </div>

            {/* ACOMPAÑANTES */}
            {attendance === "yes" && (
              <div className="space-y-2">
                <label className="block text-xs tracking-[0.18em] uppercase text-[#d6c09b]">
                  ¿Cuántas personas te acompañarán?
                </label>

                <select
                  value={companions}
                  onChange={(e) => setCompanions(e.target.value)}
                  className="w-full bg-[#302b26] border border-white/20 rounded-lg px-4 py-3.5 text-white outline-none focus:border-[#bfa880] transition"
                >
                  <option value="0">Solo yo</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                </select>

                <p className="text-white/40 text-xs">
                  Incluye únicamente a las personas que asistirán contigo.
                </p>
              </div>
            )}

            {/* MENSAJE */}
            <div className="space-y-2">
              <label className="block text-xs tracking-[0.18em] uppercase text-[#d6c09b]">
                Un mensaje para los novios
                <span className="text-white/40 normal-case tracking-normal ml-2">
                  (Opcional)
                </span>
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe unas palabras especiales..."
                rows={3}
                maxLength={500}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#bfa880] resize-none transition"
              />
            </div>

            {/* MENSAJE DE ESTADO */}
            {feedback && (
              <div
                role="status"
                aria-live="polite"
                className="text-center text-sm text-[#d6c09b] bg-white/10 border border-white/20 rounded-lg p-3"
              >
                {feedback}
              </div>
            )}

            {/* BOTÓN */}
            <button
              type="submit"
              disabled={loading}
              className="
                group relative w-full overflow-hidden
                bg-[#556038] hover:bg-[#aa916b]
                disabled:opacity-50 disabled:cursor-not-allowed
                text-[#fff] py-4 rounded-full
                font-medium text-xs tracking-[0.2em]
                uppercase transition-all duration-500
                hover:scale-[1.02] shadow-xl
              "
            >
              <span className="relative z-10">
                {loading
                  ? "Registrando confirmación..."
                  : "CONFIRMAR ASISTENCIA"}
              </span>
            </button>

            <p className="text-center text-white/40 text-[10px] tracking-wider">
              GRACIAS POR SER PARTE DE NUESTRA HISTORIA
            </p>

          </form>

        </div>
      </div>

      {/* FORMA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-24" preserveAspectRatio="none">
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>

    </section>
  );
}

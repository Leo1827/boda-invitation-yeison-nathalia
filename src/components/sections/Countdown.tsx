"use client";
import { motion } from "framer-motion";

export default function Countdown() {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  /*
    Diciembre 2026 empieza en martes.
    Dom=0 Lun=1 Mar=2 Mié=3 Jue=4 Vie=5 Sáb=6
  */
  const firstDayOffset = 2;
  const eventDay = 6;

  return (
    <section className="bg-[#deb98860] text-[peru] pb-14 pt-10 px-4 flex flex-col items-center justify-center font-[family-name:var(--font-cormorant)] relative overflow-hidden">

      <div
        className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#f3f0e9] via-[#f3f0e9]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-[#A64D1B]"
      >
        <h2 className="text-3xl md:text-4xl leading-2 uppercase font-light mb-3">
          El Gran Día
        </h2>

        <span className="text-5xl md:text-5xl font-[family-name:var(--font-pinyon)]  family-cursive">
          Diciembre
        </span>

        {/* Calendario */}
        <div className="w-full mb-8 md:max-w-sm border-t border-b border-[#A64D1B]/30 py-2">
          <div className="grid grid-cols-7 text-center mb-2 text-sm tracking-wider font-bold">
            {daysOfWeek.map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid border-t grid-cols-7 text-center text-lg">

            {/* ESPACIOS VACÍOS */}
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* DÍAS */}
            {days.map(day => (
              <div
                key={day}
                className="relative flex justify-center items-center h-8"
              >
                <span
                  className={`
                    relative z-10
                    ${day === eventDay ? "text-white" : "text-zinc-700"}
                  `}
                >
                  {day}
                </span>

                {day === eventDay && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                      viewBox="0 0 23 23"
                      className="w-8 h-8 fill-[#A64D1B]"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
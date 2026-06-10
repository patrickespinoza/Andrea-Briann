import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Portada() {
  const audioRef = useRef(null);

  const [showMusicModal, setShowMusicModal] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const enableMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error(error);
      });
    }

    setIsMuted(false);
    setShowMusicModal(false);
  };

  const disableMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsMuted(true);
    setShowMusicModal(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error(error);
      });
    } else {
      audioRef.current.muted = true;
    }

    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">

      {/* Destellos suaves */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(1,178,212,.04), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(93,69,190,.04), transparent 30%)
          `,
        }}
      />

      {/* Marco */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          relative
          w-full
          max-w-[1300px]
          h-screen
          flex
          items-center
          justify-center
        "
      >
        <img
          src="/marco-portada.png"
          alt="Marco Floral"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-fill
            pointer-events-none
            select-none
          "
        />

        {/* Contenido */}
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-[18%]
            sm:px-[20%]
            md:px-[22%]
            mt-16
            md:mt-24
          "
        >

          {/* Nombre Novia */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              font-playfair
              text-[2.5rem]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[6rem]
              xl:text-[7rem]
              font-light
              text-[#1A1A1A]
              leading-tight
            "
          >
            Andrea
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="my-3 md:my-5"
          >
            <span
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-[DancingScript]
              "
              style={{
                background:
                  "linear-gradient(135deg,#FCD102,#EE5802)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &
            </span>
          </motion.div>

          {/* Nombre Novio */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              font-playfair
              text-[2.5rem]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[6rem]
              xl:text-[7rem]
              font-light
              text-[#1A1A1A]
              leading-tight
            "
          >
            Briann
          </motion.h1>

          {/* Separador */}
          <div className="flex justify-center items-center gap-4 my-8 md:my-10">
            <div className="w-10 sm:w-16 h-px bg-[#01B2D4]" />
            <div className="w-3 h-3 rounded-full bg-[#FCD102]" />
            <div className="w-10 sm:w-16 h-px bg-[#5D45BE]" />
          </div>

          {/* Frase */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              italic
              text-[#666]
              text-sm
              sm:text-lg
              md:text-xl
              max-w-xl
              leading-relaxed
            "
          >
            Celebremos juntos el inicio de nuestra historia para siempre
          </motion.p>

          {/* Fecha */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-3
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-sm
              sm:text-lg
              md:text-xl
            "
            style={{
              color: "#5D45BE",
            }}
          >
            25 · Julio · 2026
          </motion.p>

        </div>
      </motion.div>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* Modal Música */}
      {showMusicModal && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/60
            backdrop-blur-sm
            flex
            items-center
            justify-center
            px-6
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="
              bg-white
              rounded-3xl
              shadow-2xl
              max-w-md
              w-full
              p-8
              text-center
            "
          >
            <div className="text-5xl mb-4">
              🎵
            </div>

            <h3
              className="
                text-2xl
                font-playfair
                mb-3
                text-[#5D45BE]
              "
            >
              Esta invitación contiene música
            </h3>

            <p
              className="
                text-gray-600
                leading-relaxed
                mb-8
              "
            >
              Te recomendamos activar el sonido para disfrutar una experiencia más especial.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row">

              <button
                onClick={enableMusic}
                className="
                  flex-1
                  py-3
                  rounded-full
                  text-white
                  font-medium
                  shadow-lg
                "
                style={{
                  background:
                    "linear-gradient(135deg,#5D45BE,#01B2D4)",
                }}
              >
                Activar Música
              </button>

              <button
                onClick={disableMusic}
                className="
                  flex-1
                  py-3
                  rounded-full
                  border
                  border-gray-300
                  text-gray-700
                  font-medium
                "
              >
                Silenciar
              </button>

            </div>
          </motion.div>
        </div>
      )}

      {/* Botón Sonido */}
      {!showMusicModal && (
        <button
          onClick={toggleMute}
          className="
            fixed
            bottom-6
            right-6
            z-50
            bg-white/90
            backdrop-blur-md
            px-4
            py-2
            rounded-full
            shadow-lg
            hover:scale-105
            transition-all
          "
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      )}
    </section>
  );
}
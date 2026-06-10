import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section className="relative w-full bg-[#FAF9F6] overflow-hidden py-28 px-6">

      {/* Fondo decorativo muy sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(1,178,212,0.03), transparent 35%),
            radial-gradient(circle at 80% 70%, rgba(93,69,190,0.03), transparent 35%)
          `,
        }}
      />

      {/* Flor superior izquierda */}
      <div
        className="absolute top-8 left-6 md:left-20 text-5xl md:text-7xl select-none pointer-events-none"
        style={{
          color: "rgba(1,178,212,0.08)",
        }}
      >
        ✿
      </div>

      {/* Flor inferior derecha */}
      <div
        className="absolute bottom-8 right-6 md:right-20 text-5xl md:text-7xl select-none pointer-events-none"
        style={{
          color: "rgba(93,69,190,0.08)",
        }}
      >
        ✿
      </div>

      {/* Flor central gigante */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
        "
      >
        <span
          className="text-[14rem] md:text-[22rem] leading-none"
          style={{
            color: "rgba(93,69,190,0.025)",
          }}
        >
          ✿
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Título */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[0.45em]
            text-xs
            md:text-sm
            mb-6
            font-medium
          "
          style={{
            background:
              "linear-gradient(90deg,#01B2D4,#5D45BE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nuestra Boda
        </motion.p>

        {/* Ornamento mexicano elegante */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#01B2D4]" />

          <span
            className="text-xl"
            style={{ color: "#FCD102" }}
          >
            ✿
          </span>

          <div className="w-2 h-2 rounded-full bg-[#DF3CB5]" />

          <span
            className="text-xl"
            style={{ color: "#EE5802" }}
          >
            ✿
          </span>

          <div className="w-2 h-2 rounded-full bg-[#5D45BE]" />
        </div>

        {/* Nombre novia */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-[#1A1A1A]
            text-5xl
            sm:text-6xl
            md:text-8xl
            leading-tight
            font-light
          "
        >
          Andrea Cid Durán López
        </motion.h1>

        {/* Separador */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-8 flex justify-center items-center gap-6"
        >
          <div className="w-16 h-px bg-[#D8CDB7]" />

          <span
            className="
              text-5xl
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

          <div className="w-16 h-px bg-[#D8CDB7]" />
        </motion.div>

        {/* Nombre novio */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-[#1A1A1A]
            text-5xl
            sm:text-6xl
            md:text-8xl
            leading-tight
            font-light
          "
        >
          Briann Eulises Romero Lima
        </motion.h1>

        {/* Cenefa floral */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mt-14"
        >
          <span className="text-[#01B2D4] text-xl">✿</span>
          <span className="text-[#FCD102] text-xl">✿</span>
          <span className="text-[#EE5802] text-xl">✿</span>
          <span className="text-[#DF3CB5] text-xl">✿</span>
          <span className="text-[#5D45BE] text-xl">✿</span>
        </motion.div>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="
            mt-10
            max-w-2xl
            mx-auto
            text-[#555]
            text-base
            md:text-lg
            leading-relaxed
            font-light
          "
        >
          Con la bendición de Dios y nuestros padres,
          queremos compartir contigo uno de los momentos más
          importantes de nuestras vidas.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Novios;
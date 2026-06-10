import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6">

      {/* TALAVERA ESQUINAS */}

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-40
          md:w-60
          opacity-85
          pointer-events-none
          select-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          w-40
          md:w-60
          opacity-85
          rotate-90
          pointer-events-none
          select-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-40
          md:w-60
          opacity-85
          rotate-180
          pointer-events-none
          select-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          left-0
          w-40
          md:w-60
          opacity-85
          -rotate-90
          pointer-events-none
          select-none
        "
      />

      {/* FONDO SUAVE */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(1,178,212,0.05), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(93,69,190,0.05), transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(252,209,2,0.03), transparent 45%)
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* DIA */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[0.5em]
            text-sm
            md:text-base
            font-medium
          "
          style={{
            color: "#5D45BE",
          }}
        >
          {dia}
        </motion.p>

        {/* FECHA */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-4
            font-playfair
            text-[6rem]
            md:text-[9rem]
            leading-none
            font-light
            text-[#1A1A1A]
          "
        >
          {fecha}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-4
            text-xl
            md:text-3xl
            uppercase
            tracking-[0.25em]
            text-[#666]
          "
        >
          {mesAnio}
        </motion.p>

        {/* SEPARADOR */}

        <div className="flex justify-center items-center gap-4 my-12">

          <div
            className="h-[2px] w-24"
            style={{
              background:
                "linear-gradient(90deg,#01B2D4,#5D45BE)",
            }}
          />

          <div
            className="w-4 h-4 rounded-full border-2"
            style={{
              borderColor: "#FCD102",
            }}
          />

          <div
            className="h-[2px] w-24"
            style={{
              background:
                "linear-gradient(90deg,#5D45BE,#01B2D4)",
            }}
          />

        </div>

        {/* TITULO */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-5xl
            font-playfair
            text-[#1A1A1A]
          "
        >
          {titulo}
        </motion.h2>

        {/* HORA */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="
            mt-10
            text-3xl
            md:text-4xl
            font-[DancingScript]
          "
          style={{
            color: "#01B2D4",
          }}
        >
          {hora}
        </motion.p>

        {/* LUGAR */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="
            mt-10
            text-2xl
            md:text-3xl
            font-playfair
            text-[#1A1A1A]
          "
        >
          {lugar}
        </motion.h3>

        {/* DIRECCION */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="
            mt-4
            max-w-xl
            mx-auto
            text-[#666]
            leading-relaxed
            text-base
            md:text-lg
          "
        >
          {direccion}
        </motion.p>

        {/* BOTON */}

        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          href={ubicacion}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-12
            px-12
            py-4
            rounded-full
            text-white
            font-medium
            tracking-wide
            shadow-xl
            transition-all
            duration-500
            hover:scale-105
            hover:-translate-y-1
          "
          style={{
            background:
              "linear-gradient(135deg,#01B2D4,#5D45BE)",
          }}
        >
          Ver Ubicación
        </motion.a>

      </motion.div>
    </section>
  );
};

export default Celebracion;
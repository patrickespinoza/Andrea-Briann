import React from "react";
import { motion } from "framer-motion";

const Itinerario2 = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const eventosIzquierda = [
    {
      titulo: "Boda Civil",
      imagen: "/arco-de-la-boda.png",
      hora: "1:00 PM",
    },
    {
      titulo: "Comida",
      imagen: "/cena-romantica.png",
      hora: "2:00 PM",
    },
 
  ];

  const eventosDerecha = [
    
    {
      titulo: "Brindis, Vals, Partida de Pastel",
      imagen: "/pastel.png",
      hora: "6:00 PM",
    },   
    {
      titulo: "Baile",
      imagen: "/bola-de-disco.png",
      hora: "7:00 PM ",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 overflow-hidden">

      {/* Esquinas Talavera */}

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-24
          md:w-36
          opacity-85
          pointer-events-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          w-24
          md:w-32
          rotate-90
          opacity-85
          pointer-events-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-24
          md:w-32
          rotate-180
          opacity-85
          pointer-events-none
        "
      />

      <img
        src="/talavera-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          left-0
          w-24
          md:w-32
          -rotate-90
          opacity-85
          pointer-events-none
        "
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >

        {/* TÍTULO */}

        <div className="text-center">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              font-semibold
            "
            style={{
              color: "#EE5802",
            }}
          >
            Nuestro Día
          </p>

          <h1
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-playfair
            "
            style={{
              color: "#5D45BE",
            }}
          >
            Itinerario
          </h1>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div
              className="w-20 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg,#01B2D4,#5D45BE)",
              }}
            />

            <div className="w-3 h-3 rounded-full bg-[#FCD102]" />

            <div
              className="w-20 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg,#5D45BE,#01B2D4)",
              }}
            />

          </div>

        </div>

        {/* TIMELINE */}

        <div className="relative mt-20">

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              h-full
              w-[3px]
              -translate-x-1/2
            "
            style={{
              background:
                "linear-gradient(#01B2D4,#5D45BE)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* IZQUIERDA */}

            <div className="flex flex-col gap-12">

              {eventosIzquierda.map((evento, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="
                    bg-white
                    rounded-[2rem]
                    p-8
                    border
                    shadow-xl
                    hover:-translate-y-1
                    transition
                  "
                  style={{
                    borderColor: "#DCE7FF",
                  }}
                >

                  <div
                    className="
                      w-24
                      h-24
                      mx-auto
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,#01B2D4,#5D45BE)",
                    }}
                  >
                    <img
                      src={evento.imagen}
                      alt={evento.titulo}
                      className="h-12 w-12"
                    />
                  </div>

                  <h2
                    className="
                      mt-6
                      text-3xl
                      text-center
                      font-playfair
                    "
                    style={{
                      color: "#1A1A1A",
                    }}
                  >
                    {evento.titulo}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-2xl
                      font-[DancingScript]
                    "
                    style={{
                      color: "#EE5802",
                    }}
                  >
                    {evento.hora}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* DERECHA */}

            <div className="flex flex-col gap-12 md:mt-20">

              {eventosDerecha.map((evento, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="
                    bg-white
                    rounded-[2rem]
                    p-8
                    border
                    shadow-xl
                    hover:-translate-y-1
                    transition
                  "
                  style={{
                    borderColor: "#DCE7FF",
                  }}
                >

                  <div
                    className="
                      w-24
                      h-24
                      mx-auto
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,#5D45BE,#01B2D4)",
                    }}
                  >
                    <img
                      src={evento.imagen}
                      alt={evento.titulo}
                      className="h-12 w-12"
                    />
                  </div>

                  <h2
                    className="
                      mt-6
                      text-3xl
                      text-center
                      font-playfair
                    "
                    style={{
                      color: "#1A1A1A",
                    }}
                  >
                    {evento.titulo}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-2xl
                      font-[DancingScript]
                    "
                    style={{
                      color: "#EE5802",
                    }}
                  >
                    {evento.hora}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Itinerario2;

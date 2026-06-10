import React, { useState } from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";

export default function Itinerario() {

  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  const enviarConfirmacion = async () => {

    if (!nombreInvitado || !asistencia) {
      setError("Completa tu nombre y confirma asistencia");
      return;
    }

    setError("");

    const data = {
  nombre: nombreInvitado,
  asistencia,
  invitados: Number(invitados) || 1,
  mensaje: mensajeInvitado,
};

  try {

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxy-qVsZyDdFbfN97ExrWS-y5sshQkdMmL17N8orLCEWjROupNmJbS45KOjDwZk-b5Zkg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  alert("¡Gracias! Tu confirmación fue enviada.");

  setNombreInvitado("");
  setMensajeInvitado("");
  setAsistencia("");
  setInvitados(1);

} catch (error) {

  console.error(error);
  setError("Hubo un error al enviar");

}
  };

  return (
    <div>

      <Novios />

      <div className="overflow-hidden">
        <Celebracion
          titulo="Ceremonia"
          dia="Sábado"
          fecha="25"
          mesAnio="Julio 2026"
          hora="12:00 PM"
          lugar="Salón Quinta Jimena"
          direccion="Emilio Carranza 12"
          ubicacion="https://maps.app.goo.gl/178mHUcbGDc3viFF9"
        />
      </div>

      <Intinerario2 />

            {/* VERSÍCULO */}

      <div className="relative w-full flex items-center justify-center bg-white py-16 px-4">

        <img
          src="/marco-versiculo.png"
          alt="Marco Floral"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            pointer-events-none
            select-none
            opacity-90
          "
        />

        <div
          className="
            relative
            z-10
            w-full
            max-w-4xl
            text-center
            px-[12%]
            sm:px-[15%]
            md:px-[18%]
            lg:px-[20%]
            py-24
            md:py-32
          "
        >


          <h2
            className="
              font-playfair
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              leading-relaxed
              font-light
              text-[#2B2B2B]
            "
          >
            “El amor nunca deja de ser;
            <br />
            todo lo cree,
            todo lo espera,
            todo lo soporta.”
          </h2>

          <div className="flex justify-center items-center gap-4 my-10">

            <div className="w-12 md:w-20 h-px bg-[#01B2D4]" />

            <div className="w-3 h-3 rounded-full bg-[#FCD102]" />

            <div className="w-12 md:w-20 h-px bg-[#5D45BE]" />

          </div>

          <p
            className="
              text-lg
              md:text-2xl
              italic
            "
            style={{
              color: "#EE5802",
            }}
          >
            1 Corintios 13:7-8
          </p>

        </div>

      </div>

      {/* CONFIRMACIÓN DE ASISTENCIA */}

      <section className="relative bg-white py-24 px-6 overflow-hidden">

  {/* Fondo decorativo */}
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage: "url('/fondo-mexicano.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div
    className="
      relative
      z-10
      max-w-3xl
      mx-auto

      bg-white/90
      backdrop-blur-sm

      rounded-[40px]

      shadow-[0_20px_60px_rgba(0,0,0,0.08)]

      border
      border-[#E9E1D3]

      p-8
      md:p-14
    "
  >

    {/* Ornamento */}
    <div className="flex justify-center items-center gap-3 mb-8">

      <div className="w-12 h-px bg-[#01B2D4]" />

      <span className="text-2xl text-[#EE5802]">
        ❋
      </span>

      <div className="w-12 h-px bg-[#5D45BE]" />

    </div>

    <p
      className="
        uppercase
        tracking-[5px]
        text-xs
        md:text-sm
        text-center
      "
      style={{
        color: "#C8A96B",
      }}
    >
      Nuestra Boda
    </p>

    <h1
      className="
        mt-4
        text-4xl
        md:text-6xl
        text-center
        font-playfair
        text-[#1A1A1A]
      "
    >
      Confirmar Asistencia
    </h1>

    <p
      className="
        mt-6
        text-center
        text-[#555]
        text-lg
        leading-relaxed
        max-w-xl
        mx-auto
      "
    >
      Nos haría mucha ilusión contar con tu presencia en este día tan especial.
      Por favor confirma tu asistencia
    </p>

    <div className="mt-12 space-y-5">

      <input
        type="text"
        placeholder="Nombre y apellido"
        value={nombreInvitado}
        onChange={(e) =>
          setNombreInvitado(e.target.value)
        }
        className="
          w-full
          p-4

          bg-white

          border
          border-[#DDD3C1]

          rounded-2xl

          focus:outline-none
          focus:ring-2
          focus:ring-[#01B2D4]
        "
      />

      <div className="flex flex-wrap justify-center gap-4">

        <button
          onClick={() =>
            setAsistencia("Sí asistiré")
          }
          className={`
            px-8 py-3 rounded-full transition-all

            ${
              asistencia === "Sí asistiré"
                ? "text-white"
                : "bg-white border border-[#DDD3C1]"
            }
          `}
          style={
            asistencia === "Sí asistiré"
              ? {
                  background:
                    "linear-gradient(135deg,#01B2D4,#5D45BE)",
                }
              : {}
          }
        >
          Sí asistiré
        </button>

        <button
          onClick={() =>
            setAsistencia("No podré asistir")
          }
          className={`
            px-8 py-3 rounded-full transition-all

            ${
              asistencia === "No podré asistir"
                ? "bg-[#EE5802] text-white"
                : "bg-white border border-[#DDD3C1]"
            }
          `}
        >
          No asistiré
        </button>

      </div>

      <input
        type="number"
        min="1"
        value={invitados}
        onChange={(e) =>
          setInvitados(e.target.value)
        }
        placeholder="Número de invitados"
        className="
          w-full
          p-4

          bg-white

          border
          border-[#DDD3C1]

          rounded-2xl
          text-center
        "
      />

      <textarea
        rows={4}
        placeholder="Mensaje para los novios (opcional)"
        value={mensajeInvitado}
        onChange={(e) =>
          setMensajeInvitado(e.target.value)
        }
        className="
          w-full
          p-4

          bg-white

          border
          border-[#DDD3C1]

          rounded-2xl
        "
      />

      {error && (
        <p className="text-red-500 text-center">
          {error}
        </p>
      )}

      <button
        onClick={enviarConfirmacion}
        className="
          w-full
          mt-6
          py-4

          rounded-full

          text-white
          text-lg

          shadow-lg

          hover:scale-[1.02]
          transition
        "
        style={{
          background:
            "linear-gradient(135deg,#01B2D4,#5D45BE)",
        }}
      >
        Confirmar Asistencia
      </button>

    </div>

  </div>

</section>

    </div>
  );
}
import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className=" md:grid-cols-2 overflow-hidden">

        <Celebracion
          titulo="Ceremonia"
          dia="Sabado"
          fecha="25"
          mesAnio="Julio 2026"
          hora="12:00 PM"
          lugar="Salón Quinta Jimena"
          direccion="Emilio Carranza 12"
          ubicacion="https://maps.app.goo.gl/178mHUcbGDc3viFF9"
        />

      </div>

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* CONFIRMACIÓN */}

      {/* IMAGEN FINAL */}
     <div className="relative w-full flex items-center justify-center bg-[#F7F4ED] py-16 px-4">

  {/* Marco floral */}
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
    "
  />

  {/* Contenido */}
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

    <p
      className="
        uppercase
        tracking-[6px]
        text-xs
        md:text-sm
        mb-8
      "
      style={{
        color: "#C8A96B",
      }}
    >
      Versículo
    </p>

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
   <div
  className="
    relative
    flex
    flex-col
    items-center
    justify-center
    gap-4
    py-28
    px-6
    overflow-hidden
  "
>

  {/* Fondo floral mexicano */}
  <img
    src="/bugambilia-esquina.png"
    alt=""
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      pointer-events-none
      select-none
    "
  />

  {/* Capa suave para legibilidad */}
  <div className="absolute inset-0 bg-[#FAF6EE]/10" />

  {/* Contenido */}
  <div className="relative z-10 flex flex-col items-center">

    <p
      className="
        uppercase
        tracking-[6px]
        text-xs
        sm:text-sm
        mb-2
      "
      style={{
        color: "#B88A1A",
      }}
    >
      Tu presencia es importante
    </p>

    <h1
      className="
        text-3xl
        sm:text-5xl
        font-playfair
        text-center
        leading-tight
      "
      style={{
        color: "#222",
      }}
    >
      Confirmar Asistencia
    </h1>

    {/* Separador */}
    <div className="flex items-center gap-4 my-6">

      <div className="w-14 h-px bg-[#C49A25]" />

      <div className="w-3 h-3 rounded-full bg-[#C49A25]" />

      <div className="w-14 h-px bg-[#C49A25]" />

    </div>

    {/* Icono */}
    <div
      className="
        bg-white/70
        backdrop-blur-sm
        rounded-full
        p-5
        shadow-lg
      "
    >
      <img
        className="h-20 w-20 sm:h-24 sm:w-24"
        src="/anillos-de-boda.png"
        alt="Anillos"
      />
    </div>

    <p
      className="
        text-xl
        sm:text-3xl
        text-center
        font-cursiveDancing
        mt-6
        max-w-2xl
      "
      style={{
        color: "#333",
      }}
    >
      Confirma tu asistencia antes del
    </p>

    <p
      className="
        text-2xl
        sm:text-4xl
        font-playfair
        text-center
        mt-2
      "
      style={{
        color: "#8E2C7B",
      }}
    >
      20 de Diciembre
    </p>

    <button
      className="
        mt-10
        px-10
        py-4
        rounded-full
        text-lg
        text-white
        font-medium
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
      "
      style={{
        background:
          "linear-gradient(135deg,#D42E8E,#7A46D1)",
      }}
      onClick={() =>
        window.location.href =
          "https://docs.google.com/forms/d/e/1FAIpQLSdWWDOUbW7aS_g6uzvas71apTg0ub0Aw8DG5GQf9_9a9jaJZA/viewform?usp=header"
      }
    >
      Confirmar Asistencia
    </button>

  </div>

</div>

    </div>
  );
}
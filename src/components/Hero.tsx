import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-24">
{/* Logo Watermark */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

  <img
    src="/logo-watermark.png"
    alt=""
    className="
      w-175
      md:w-225
      lg:w-275
      opacity-[0.04]
      select-none
    "
  />

</div>


      <div className="relative z-10 container mx-auto px-6">

        <div className="grid lg:grid-cols-[55%_45%] items-center min-h-[85vh] gap-12">

          {/* ESQUERDA */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#F4C400] uppercase tracking-[8px] text-xs md:text-sm mb-8"
            >
              Campina Grande — PB
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="font-black leading-[0.85]"
            >
              <span className="block text-6xl md:text-7xl lg:text-[7rem]">
                UMA
              </span>

              <span className="block text-6xl md:text-7xl lg:text-[7rem]">
                IGREJA
              </span>

              <span className="block text-[#F4C400] text-6xl md:text-7xl lg:text-[7rem]">
                VIVA
              </span>

              <span className="block text-6xl md:text-7xl lg:text-[7rem]">
                E COM
              </span>

              <span className="block text-6xl md:text-7xl lg:text-[7rem]">
                PROPÓSITO.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-zinc-400 text-lg max-w-xl"
            >
              Um lugar onde gerações se encontram com Deus,
              com a comunidade e com o seu chamado.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-10">

             <a
  href="https://www.instagram.com/lagoinhazonasulcg/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#F4C400]
    text-black
    px-6
    py-3
    rounded-full
    font-semibold
    hover:scale-105
    transition
    inline-flex
    items-center
    justify-center
  "
>
  Conheça
</a>

              <button className="border border-zinc-700 px-8 py-4 rounded-full hover:border-[#F4C400] transition">
                Projetos
              </button>

            </div>

          </div>

          {/* DIREITA */}
<div className="relative flex justify-center">

  {/* Glow */}
  <div className="absolute w-100 h-100 bg-[#F4C400]/10 blur-[180px] rounded-full pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="relative z-20"
  >

    <div className="w-[320px] md:w-90 h-162.5 rounded-[40px] overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl">

      <video
        controls
        playsInline
        preload="none"
        poster="/hero-poster.jpg"
        className="w-full h-full object-cover"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

    </div>

  </motion.div>

</div>

        </div>

      </div>

    </section>
  );
}
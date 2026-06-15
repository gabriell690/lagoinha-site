import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function AmorQueTransborda() {
  return (
    <section
      id="amor-que-transborda"
      className="relative py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-150 h-150 bg-[#F4C400]/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

  <video
    controls
    playsInline
    preload="metadata"
    className="w-full h-137.5 object-cover"
  >
    <source
      src="/amor-que-transborda.mp4"
      type="video/mp4"
    />
  </video>

</div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-3 text-[#F4C400] mb-6">

              <HeartHandshake size={28} />

              <span className="uppercase tracking-[4px]">
                Projeto Social
              </span>

            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Amor que
              <span className="text-[#F4C400]">
                {" "}Transborda
              </span>
            </h2>

            <p className="text-zinc-400 text-lg mt-8 leading-relaxed">
              Um movimento de amor, compaixão e serviço
              que leva esperança às famílias da nossa cidade.
            </p>

            <p className="text-zinc-400 text-lg mt-4 leading-relaxed">
              Através de ações sociais, distribuição de alimentos,
              apoio a comunidades e cuidado com pessoas,
              buscamos demonstrar o amor de Cristo na prática.
            </p>

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
  Conheça o Projeto
</a>

              <button className="border border-zinc-700 px-8 py-4 rounded-full hover:border-[#F4C400] transition">
                Quero Ajudar
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
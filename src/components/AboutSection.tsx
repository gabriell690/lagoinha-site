import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-black text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#F4C400] uppercase tracking-[6px] text-sm">
              Quem Somos
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-4">
              Uma igreja viva e cheia
              de propósito.
            </h2>

            <p className="text-zinc-400 mt-8 text-lg leading-relaxed">
              Somos a Lagoinha Zona Sul Campina Grande.
              Uma igreja apaixonada por Jesus,
              comprometida em alcançar pessoas,
              servir famílias e impactar nossa cidade.
            </p>

            <p className="text-zinc-400 mt-4 text-lg leading-relaxed">
              Acreditamos que cada pessoa possui um propósito
              e pode viver uma experiência real com Deus.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <h3 className="text-[#F4C400] text-4xl font-black">
                  AMOR
                </h3>

                <p className="text-zinc-400">
               QUE TRANSBORDA
                </p>
              </div>

        
        

            </div>

          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="relative">

              <div className="absolute -inset-5 bg-[#F4C400]/10 blur-3xl rounded-3xl" />

              <img
                src="/lagoinhadrone.png"
                alt="Lagoinha Zona Sul"
                className="relative rounded-3xl object-cover h-150 w-full"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
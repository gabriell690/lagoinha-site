import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Conferência Espírito Santo 26",
    image: "/evento1.png",
  },
  {
    title: "Legacy Night",
    image: "/evento2.png",
  },
  {
    title: "Culto de Domingo",
    image: "/evento3.png",
  },
  {
    title: "Ceia do Senhor",
    image: "/evento4.png",
  },
];

export default function EventsSection() {
  return (
    <section
      id="eventos"
      className="bg-black text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <span className="text-[#F4C400] uppercase tracking-[6px] text-sm">
            Eventos
          </span>

          <h2 className="text-5xl font-black mt-4">
            Eventos Lagoinha Zona Sul CG
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl">
            Acompanhe conferências, cultos especiais,
            encontros e tudo o que Deus está fazendo
            em nossa igreja.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="group"
            >

              <div className="relative overflow-hidden rounded-3xl">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-105 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">

                  <h3 className="font-bold text-2xl">
                    {event.title}
                  </h3>

                  <button className="flex items-center gap-2 mt-4 text-[#F4C400]">

                    Ver mais

                    <ArrowUpRight size={18} />

                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
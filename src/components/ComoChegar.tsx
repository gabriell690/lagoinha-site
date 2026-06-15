import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Baby,
  Accessibility,
  Coffee,
} from "lucide-react";

export default function ComoChegar() {
  return (
    <section
      id="contato"
      className="py-32 bg-zinc-950 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">

          <span className="text-[#F4C400] uppercase tracking-[6px] text-sm">
            Visite-nos
          </span>

          <h2 className="text-5xl font-black mt-4">
            Como Chegar
          </h2>

          <p className="text-zinc-400 mt-4">
            Será uma alegria receber você e sua família.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Informações */}
          <div className="bg-black border border-zinc-800 rounded-3xl p-8">

            {/* Endereço */}
            <div className="flex gap-4 mb-8">

              <MapPin
                size={28}
                className="text-[#F4C400]"
              />

              <div>

                <h3 className="font-bold text-xl">
                  Endereço
                </h3>

                <p className="text-zinc-400 mt-2 leading-relaxed">
                  Lagoinha Zona Sul Campina Grande
                  <br />
                  Av. Almirante Barroso, 1563 
                  <br />
                  Liberdade
                  <br />
                  Campina Grande - PB
                  <br />
                  CEP 58415-700
                </p>

              </div>

            </div>

            {/* Horários */}
            <div className="flex gap-4 mb-8">

              <Clock
                size={28}
                className="text-[#F4C400]"
              />

              <div>

                <h3 className="font-bold text-xl">
                  Horários dos Cultos
                </h3>

                <p className="text-zinc-400 mt-2">
                  Domingo • 18h
                  <br />
                  Quarta • 20h
                </p>

              </div>

            </div>

            {/* Facilidades */}
            <div>

              <h3 className="font-bold text-xl mb-6">
                Estrutura
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="flex items-center gap-3 text-zinc-300">
                  <Car size={18} />
                  Estacionamento
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Baby size={18} />
                  Espaço Kids
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Accessibility size={18} />
                  Acessibilidade
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Coffee size={18} />
                  Área de Convivência
                </div>

              </div>

            </div>

            {/* Botão */}
            <a
              href="https://maps.google.com/?q=Lagoinha+Zona+Sul+Campina+Grande"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                bg-[#F4C400]
                text-black
                font-bold
                px-8
                py-4
                rounded-full
                hover:scale-105
                transition
              "
            >
              <Navigation size={18} />
              Abrir no Google Maps
            </a>

          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

            <iframe
              src="https://maps.google.com/maps?q=-7.2424591,-35.9015931&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="min-h-137.5"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
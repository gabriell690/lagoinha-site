import {
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Igreja */}
          <div>

            <h2 className="text-3xl font-black">
              LAGOINHA
              <span className="text-[#F4C400] ml-2">
                CG
              </span>
            </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed">
              Uma igreja viva e com propósito,
              conectando pessoas a Jesus e
              transformando vidas em Campina Grande.
            </p>

          </div>

          {/* Navegação */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Navegação
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <a href="#sobre">Sobre</a>
              </li>

              <li>
                <a href="#eventos">Eventos</a>
              </li>

              <li>
                <a href="#galeria">Galeria</a>
              </li>

              <li>
                <a href="#contato">Contato</a>
              </li>

            </ul>

          </div>

          {/* Cultos */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Horários
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex gap-3">
                <Clock size={18} />
                <span>Domingo • 18h</span>
              </div>

              <div className="flex gap-3">
                <Clock size={18} />
                <span>Quarta • 20h</span>
              </div>

            </div>

          </div>

          {/* Contato */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Contato
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Av. Almirante Barroso, 1563 - Liberdade, Campina Grande - PB, 58414-345
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>
                  (83) 99999-9999
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Linha */}
        <div className="border-t border-zinc-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Lagoinha Zona Sul Campina Grande.
              Todos os direitos reservados.
            </p>

            <div className="flex gap-4">

              <a
                href="https://instagram.com/lagoinhazonasulcg"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#F4C400] hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#F4C400] hover:text-black transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
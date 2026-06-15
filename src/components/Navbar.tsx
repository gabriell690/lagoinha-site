export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-800">

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

  <img
    src="/logo.png"
    alt="Lagoinha Zona Sul"
    className="h-12 w-auto"
  />

  <div>
    <h1 className="font-black text-2xl leading-none">
      LAGOINHA
    </h1>

    <span className="text-[#F4C400] text-sm font-semibold">
      ZONA SUL CG
    </span>
  </div>

</div>

        <nav className="hidden lg:flex items-center gap-10">

          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#eventos">Eventos</a>
          <a href="#contato">Contato</a>
          <a href="#amor-que-transborda">Amor que transborda</a>

        </nav>

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
  Visite-nos
</a>

      </div>

    </header>
  );
}
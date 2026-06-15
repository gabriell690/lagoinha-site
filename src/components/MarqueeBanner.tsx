export default function MarqueeBanner() {
  const items = Array(20).fill("LAGOINHA ZONA SUL CAMPINA GRANDE");

  return (
    <section className="bg-[#F4C400] overflow-hidden border-y border-yellow-500">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={index}>
            {item}
            <span className="mx-8">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
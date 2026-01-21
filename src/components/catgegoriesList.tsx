import { useRef } from "react";
import { Link } from "react-router-dom";
import { Products } from "../data/products";

const CategoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.9;
    node.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-24 font-['Baloo_2',cursive]">
      
      <h2 className="text-center text-4xl mb-6">See What We Have</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
        >
          {Products.map((item) => (
            <article
              key={item.title}
              className="shrink-0 w-[80%] sm:w-[55%] md:w-[32%] snap-start flex flex-col rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <Link to={item.to}>
                <div className="aspect-4/3 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.05]"
                  />
                </div>
              </Link>

              <div className="p-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-neutral-700">{item.text}</p>
                </div>

                <Link to={item.to}>
                  <button
                    className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded border border-neutral-600 text-sm text-neutral-700 bg-white hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
                    aria-label={`View ${item.title}`}
                  >
                    &#8250;
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll buttons */}
        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="inline-flex h-9 px-4 items-center justify-center border border-[#D4AF37] text-xs tracking-[0.14em] uppercase text-neutral-700 bg-white hover:bg-[#FFF8E1] transition-colors"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="inline-flex h-9 px-4 items-center justify-center border border-[#D4AF37] text-xs tracking-[0.14em] uppercase text-neutral-700 bg-white hover:bg-[#FFF8E1] transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

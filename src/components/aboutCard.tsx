import heroBg from "../assets/images/biscuit-rusk.png";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <section className="relative bg-white [font-family:'Baloo_2',cursive]">
      {/* Image background at fixed height */}
      <div className="relative z-0 h-[560px] md:h-[740px] overflow-hidden">
        <img
          src={heroBg}
          alt="Bakery background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/18" />
      </div>

      {/* Centered card on top of image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 pointer-events-none">
        <div className="max-w-3xl w-full pointer-events-auto">
          <div className="bg-white shadow-[0_18px_45px_rgba(0,0,0,0.2)] border border-neutral-200 px-6 sm:px-10 py-8 md:py-9 text-center rounded-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.06em] uppercase text-neutral-900 mb-4">
              Welcome
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
              Novelty Bakery is a retail bakery on High Street North in East Ham, London,
              that prides itself on quality, from‑scratch baking done on the premises.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-6">
              Serving the community with quality baked goods since 1985, and specialists in puff
              pastry and fresh bread, the counter is filled with pastries, savoury snacks, loaves,
              cream slices and simple celebration cakes ready to take home or share.
            </p>

            <Link to="/about">
              <button className="inline-flex items-center justify-center border border-[#D4AF37] px-8 py-2.5 text-[11px] md:text-xs tracking-[0.18em] uppercase text-neutral-900 bg-white hover:bg-[#FFF8E1] transition-colors">
                More about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;

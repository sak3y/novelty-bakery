import Photo from "../assets/images/biscuit-rusk.png";

const RevLetterBox = () => {
  return (
    <section className="relative bg-white py-12 md:py-20 border-b border-neutral-200 font-['Baloo_2',cursive]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.04em] text-neutral-900 mb-12">
              Biscuits To Snack On
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-8">
              Biscuits and rusks baked for dipping, snacking and sharing, from tea time to
              late‑night treats.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-8">
              Fresh trays are baked on High Street North and brought straight to the counter so you
              can pick up a packet on your way home.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-neutral-800">
              Pop in, choose a bag of biscuits or rusks, and head home with something that tastes
              like it’s just come out of the oven.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <img
              src={Photo}
              loading="lazy"
              alt="Biscuit rusks and baked treats"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevLetterBox;

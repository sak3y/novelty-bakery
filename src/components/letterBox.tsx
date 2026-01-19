import Photo from "../assets/images/nimki.png";

const MoreInfo = () => {
  return (
    <section className="relative bg-white py-12 md:py-20 border-b border-neutral-200 [font-family:'Baloo_2',cursive]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
        
          <div className="flex justify-center md:justify-start">
            <img
              src={Photo}
              alt="Biscuit rusks and baked treats"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-sm"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.04em] text-neutral-900 mb-12">
              Treats to Take Home
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-8">
              From puff pastries to rusks and biscuits, Novelty Bakery is stocked with bakes to take
              home for tea time or to share with family.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-8">
              Trays of savoury snacks, simple cakes and everyday favourites are baked on High Street
              North and put straight onto the counter.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-neutral-800">
              Pop in, choose a box or a bag of your favourites, and head home with something fresh
              from the bakery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;

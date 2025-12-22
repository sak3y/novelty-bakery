import pastriesImg from "../assets/images/pastries.png";
import palmiersImg from "../assets/images/palmier.png";
import biscuitImg from "../assets/images/biscuit-rusk.png";

const CategoriesSection = () => {
  const items = [
    {
      title: "Pastries",
      image: pastriesImg,
      text: "Our pastry counter is always changing, so there is always something new to try.",
    },
    {
      title: "Delicacies",
      image: palmiersImg,
      text: "Palmiers and other little treats for sharing or saving for later.",
    },
    {
      title: "Biscuits",
      image: biscuitImg,
      text: "Crisp rusks and biscuits perfect with tea, coffee or for the biscuit tin.",
    },
  ];

  return (
    <section className="bg-[#FFF7ED] border-b border-[#E8CFA4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col">
              {/* Image with inner border frame */}
              <div className="bg-[#FFF7ED] border border-[#F3D39A] p-2 mb-6">
                <div className="border border-[#E8CFA4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Text block */}
              <div className="bg-[#FFF7ED] px-6 pt-2 pb-8">
                <h3 className="font-serif text-[22px] md:text-[24px] text-[#8C1C13] mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#8C1C13">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

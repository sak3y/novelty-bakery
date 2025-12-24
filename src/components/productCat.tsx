import { Link } from "react-router-dom";
import pastriesImg from "../assets/images/pastries.png";
import palmiersImg from "../assets/images/palmier.png";
import biscuitImg from "../assets/images/biscuit-rusk.png";

const CategoriesSection = () => {
  const items = [
    {
      title: "Pastries",
      image: pastriesImg,
      text: "Our pastry counter is always changing, so there is always something new to try.",
      to: "/products#pastries",
    },
    {
      title: "Delicacies",
      image: palmiersImg,
      text: "Palmiers and other little treats for sharing or saving for later.",
      to: "/products#delicacies",
    },
    {
      title: "Biscuits",
      image: biscuitImg,
      text: "Crisp rusks and biscuits perfect with tea, coffee or for the biscuit tin.",
      to: "/products#biscuits",
    },
  ];

  return (
    <section className="bg-[#FFF7ED] border-b border-[#E8CFA4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >

              <div className="bg-white">
                <div className="border border-[#E8CFA4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Text block */}
              <div className="px-6 pt-4 pb-6">
                <h3 className="font-serif text-[22px] font-semibold md:text-[24px] text-[#8C1C13] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#4A3725] mb-4">
                  {item.text}
                </p>

                {/* Hover button */}
                <div className="mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  <Link to={item.to}>
                    <button className="inline-flex items-center justify-center border border-[#8C1C13] px-6 py-2 text-[11px] tracking-[0.16em] uppercase text-[#2B1400] bg-transparent hover:bg-[#fff5f5] transition-colors">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

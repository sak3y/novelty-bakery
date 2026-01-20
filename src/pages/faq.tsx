import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Do you offer delivery?",
    answer:
      "At the moment cakes and pastries are mainly collected from the shop on High Street North. For larger orders, we may be able to arrange local delivery by agreement.",
  },
  {
    question: "Can I reserve items to collect later?",
    answer:
      "If you call the bakery we can usually put items aside for the same day, especially on busy weekends when favourites sell out quickly.",
  },
  {
    question: "Do you cater for allergies?",
    answer:
      "Many items contain gluten, dairy and eggs, and our bakery uses shared equipment. Please speak to the team in person or by phone so we can explain ingredients and advise what is most suitable.",
  },
  {
    question: "How can I place an order or ask a question?",
    answer: (
      <>
        You can visit the shop, call 020 8471 3415 or{" "}
        <Link to="/contact" className="text-[#D4AF37] underline underline-offset-2">
          email us
        </Link>
        . You can also follow on{" "}
        <a
          href="https://www.instagram.com/noveltybakery_/"
          className="text-[#D4AF37] underline underline-offset-2"
        >
          Instagram
        </a>{" "}
        to see what is in the counter each day.
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 [font-family:'Baloo_2',cursive]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Intro */}
        <section className="border-b border-neutral-200">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-600 mb-3">
              Frequently asked questions
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.08em] uppercase text-neutral-900">
              A few things people ask
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700 max-w-2xl mx-auto">
              If you cannot see your question here, you are always welcome to call or pop into the
              shop and speak to the team.
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <dl className="space-y-6 md:space-y-8">
              {faqs.map((item) => (
                <div key={item.question} className="border-b border-neutral-200 pb-4">
                  <dt className="text-sm md:text-base font-semibold text-neutral-900">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-neutral-700">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;

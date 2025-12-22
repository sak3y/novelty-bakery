import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import biscuitHero from "../assets/images/biscuit-rusk.png";
import { FaInstagram } from "react-icons/fa";
import EmailForm from "../components/form";

const Contact = () => {
  return (
    <div className="min-h-screen text-[#1B1B1B]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Smaller hero band */}
        <section className="border-b border-[#E8CFA4] ">
          <div className="h-[200px] md:h-[260px] overflow-hidden">
            <img
              src={biscuitHero}
              alt="Novelty Bakery cupcakes"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* Compact contact content */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-5xl mx-auto px-6 md:px-18 py-10 md:py-12 grid gap-10 md:grid-cols-2">
            {/* Left: details */}
            <div>
              <h1 className="font-serif text-[22px] md:text-[24px] text-[#8C1C13] mb-2">
                Contact Us
              </h1>
              <div className="w-20 h-px bg-[#C7A840] mb-6" />

              <div className="space-y-4 text-[13px] md:text-[14px] text-[#4A3725]">
                <div>
                  <p className="font-semibold text-[#8C1C13] mb-1">Address</p>
                  <p>
                    Novelty Bakery
                    <br />
                    393 High Street North
                    <br />
                    London E12 6TP
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#8C1C13] mb-1">Phone</p>
                  <a href="tel:02084713415">020 8471 3415</a>
                </div>

                <div>
                  <p className="font-semibold text-[#8C1C13] mb-1">Hours</p>
                  <p>
                    Mon–Sat: 9am–7pm
                    <br />
                    Sunday: 11am–5pm
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/noveltybakery_/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8C1C13] hover:text-[#C5162C] transition-colors text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

           <EmailForm />
          </div>
        </section>

        <Gmap />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

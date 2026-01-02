import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Product = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
};

const categories: { title: string; intro?: string; items: Product[] }[] = [
  {
    title: "Pastries",
    intro: "Crisp layers, soft centres – baked fresh each morning.",
    items: [
      { name: "Chicken pastry", description: "Flaky puff with spiced chicken filling.", price: "£1.20" },
      { name: "Veg puff", description: "Seasoned vegetable filling in golden pastry.", price: "£1.80" },
      { name: "Sausage roll", description: "Classic savoury roll.", price: "£1.70" },
    ],
  },
  {
    title: "Breads",
    intro: "Loaves and rolls for breakfast, lunch and tea.",
    items: [
      { name: "Soft white loaf", description: "Sandwich loaf, sliced on request.", price: "from £2.40" },
      { name: "Brown loaf", description: "Light wholemeal loaf.", price: "from £2.60" },
      { name: "Bread rolls", description: "White or brown, baked daily.", price: "£0.50 each" },
    ],
  },
  {
    title: "Biscuits & small bakes",
    intro: "For tea breaks, school runs and after‑dinner treats.",
    items: [
      { name: "Chocolate biscuit", price: "£1.20" },
      { name: "Coconut biscuit", price: "£1.20" },
      { name: "Assorted selection box", note: "Ask in store for today’s mix" },
    ],
  },
];

const Products = () => {
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
              Products
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.08em] uppercase text-neutral-900">
              Everyday bakes & fresh bread
            </h1>
            <div className="h-px w-16 mx-auto mt-4 mb-6 bg-[#D4AF37]" />
            <p className="mt-2 text-sm md:text-base leading-relaxed text-neutral-700 max-w-2xl mx-auto">
              This menu gives a flavour of what you will usually find in the counter.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white border border-neutral-200 px-6 py-8 md:px-8 md:py-9 shadow-sm"
              >
                <h2 className="text-xs tracking-[0.18em] uppercase text-neutral-900 mb-2">
                  {cat.title}
                </h2>
                {cat.intro && (
                  <p className="mb-4 text-sm text-neutral-700">{cat.intro}</p>
                )}

                <ul className="space-y-3 text-sm text-neutral-800">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex justify-between gap-3">
                        <span className="font-semibold">{item.name}</span>
                        {(item.price || item.note) && (
                          <span className="text-xs uppercase tracking-[0.14em] text-neutral-600">
                            {item.price ?? item.note}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[13px] text-neutral-700">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

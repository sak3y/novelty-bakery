type Product = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
};

export const menu: { title: string; intro?: string; items: Product[] }[] = [
  {
    title: "Pastries",
    intro: "Crisp layers, soft centres – baked fresh each morning.",
    items: [
      {
        name: "Chicken pastry",
        description: "Flaky puff with spiced chicken filling.",
        price: "£1.20",
      },
      {
        name: "Veg puff",
        description: "Seasoned vegetable filling in golden pastry.",
        price: "£1.80",
      },
      { name: "Sausage roll", description: "Classic savoury roll.", price: "£1.70" },
    ],
  },
  {
    title: "Breads",
    intro: "Loaves and rolls for breakfast, lunch and tea.",
    items: [
      {
        name: "Soft white loaf",
        description: "Sandwich loaf, sliced on request.",
        price: "from £2.40",
      },
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

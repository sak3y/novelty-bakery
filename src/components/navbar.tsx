import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const leftLinks = links.slice(0, 2);
  const rightLinks = links.slice(2);

  return (
    <header className="sticky top-0 z-50 bg-white [font-family:'Baloo_2',cursive] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* desktop */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Left links */}
          <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.12em] text-neutral-800">
            {leftLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-0.5 border-b-2 border-transparent hover:border-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link to="/" className="px-4">
            <span className="block text-2xl font-bold scale-y-110 text-neutral-900 uppercase">
              Novelty Bakery
            </span>
          </Link>

          {/* Right links */}
          <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.02em] text-neutral-800">
            {rightLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-0.5 border-b-2 border-transparent hover:border-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between h-16 md:hidden text-neutral-900">
          <Link to="/" className="text-xl font-bold scale-y-110 uppercase">
            Novelty Bakery
          </Link>
          <button
            className="p-1.5"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 mb-1 bg-neutral-900" />
            <span className="block w-5 h-0.5 mb-1 bg-neutral-900" />
            <span className="block w-5 h-0.5 bg-neutral-900" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 text-center text-sm uppercase tracking-[0.12em] text-neutral-900 border-t border-neutral-200">
            <ul className="space-y-2 pt-2">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

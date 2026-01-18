import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Privacy from "./pages/privacy";
import Products from "./pages/product";
import NotFound from "./pages/notFound";

import Cookie from "./components/cookie";

import ScrollToTop from "./hooks/useScroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productss" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Cookie />
    </BrowserRouter>
  );
}

export default App;

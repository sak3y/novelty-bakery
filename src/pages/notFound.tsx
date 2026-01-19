// NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gray flex flex-col items-center [font-family:'Baloo_2',cursive] justify-center gap-8 px-6 py-12 text-center">
      <h1 className="text-6xl font-bold drop-shadow-md">404</h1>
      <p className="text-xl text-gray-700 font-medium max-w-sm leading-relaxed">
        Page not found :/
      </p>
      <Link
        to="/"
        className="px-6 py-2 font-semibold shadow-md hover:text-lg hover:px-6 duration-300 border"
      >
        Back to Bakery
      </Link>
    </main>
  );
};

export default NotFound;

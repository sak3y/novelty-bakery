// NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
        <div className="w-24 h-24 bg-red-100 rounded-3xl mx-auto mb-8 flex items-center justify-center">
        </div>

        <h1 className="">
          404
        </h1>

        <p className="">
          Page not found. The path you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className=""
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

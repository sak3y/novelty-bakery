import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <div className="text-center md:text-left">
      <p className="mb-3 leading-relaxed text-center">
        Follow us on our newsletter
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="inline-flex w-full max-w-xs overflow-hidden  border border-[#E8CFA4] bg-white"
      >
        <input
          type="email"
          placeholder="email address"
          className="flex-1 px-3 py-2 text-[12px] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] bg-[#8C1C13] text-white hover:bg-[#C5162C] transition-colors disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "..." : "Go!"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-center text-[11px] text-red-600">{errorMessage}</p>
      )}

      {status === "success" && (
        <p className="mt-2 text-[11px] text-center text-green-700">Thanks for subscribing!</p>
      )}
    </div>
  );
};

export default Newsletter;

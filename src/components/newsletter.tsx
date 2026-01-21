import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value); // regex func

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // handle invalid emails
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const body = { email };

    // POST method
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Res update for user
    if (res.ok) setErrorMessage("Subscribed!");
    else {
      setErrorMessage("Couldn't subscribe at this time.");
    }
  };

  return (
    <div className="text-center md:text-left">
      <p className="mb-3 flex justify-center leading-relaxed text-neutral-800 text-center md:text-left">
        Join our newsletter.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="inline-flex w-full max-w-xs overflow-hidden border border-neutral-300 bg-white"
      >
        <input
          type="email"
          placeholder="email address"
          className="flex-1 px-3 py-2 text-[12px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white bg-[#D4AF37] hover:bg-[#e3c45a] transition-colors disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "..." : "Go"}
        </button>
      </form>

      {status === "error" && <p className="mt-2 text-[11px] text-red-600">{errorMessage}</p>}

      {status === "success" && (
        <p className="mt-2 text-[11px] text-center text-green-700">Subscribed!</p>
      )}
    </div>
  );
};

export default Newsletter;

const EmailForm = () => {
  return (
    <div>
      <form className="space-y-4 text-[13px] md:text-[14px] text-[#4A3725]">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-[11px] text-[#2B1400]">First name</label>
            <input
              type="text"
              className="w-full border border-[#D5C9B5] bg-[#FFF7ED] px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#8C1C13]"
            />
          </div>
          <div>
            <label className="block mb-1 text-[11px] text-[#2B1400]">Last name</label>
            <input
              type="text"
              className="w-full border border-[#D5C9B5] bg-[#FFF7ED] px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#8C1C13]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-[11px] text-[#2B1400]">Email</label>
          <input
            type="email"
            className="w-full border border-[#D5C9B5] bg-[#FFF7ED] px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#8C1C13]"
          />
        </div>

        <div>
          <label className="block mb-1 text-[11px] text-[#2B1400]">Message</label>
          <textarea
            rows={4}
            className="w-full border border-[#D5C9B5] bg-[#FFF7ED] px-3 py-1.5 text-[13px] resize-none focus:outline-none focus:border-[#8C1C13]"
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full border border-[#C7A840] bg-[#FFF7ED] text-[#8C1C13] py-2.5 text-[11px] tracking-[0.14em] uppercase hover:bg-[#F8EFD9] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;

import { Link } from "react-router";

const Announcement = () => {
  return (
    <div className="w-full bg-[#b69860] text-center py-2.5 text-[11px] md:text-sm tracking-[0.11em] font-['Baloo_2',cursive] border-b border-black/5">
      <Link to="/products"  className="text-white font-normal">
        handmade cakes & pastries · Limited batches ❤️
      </Link>
    </div>
  );
};

export default Announcement;

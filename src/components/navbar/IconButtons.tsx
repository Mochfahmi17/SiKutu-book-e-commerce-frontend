import { GoBell } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const IconButtons = () => {
  return (
    <div className="flex items-center gap-6">
      <button aria-label="Keranjang" className="cursor-pointer">
        <HiOutlineShoppingCart className="size-5" />
      </button>
      <button aria-label="Notifikasi" className="cursor-pointer">
        <GoBell className="size-5" />
      </button>
    </div>
  );
};

export default IconButtons;

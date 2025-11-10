import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router";

type CartIconProps = {
  count: number;
};

const CartIcon = ({ count }: CartIconProps) => {
  return (
    <div className="relative">
      <Link
        to="/cart"
        title="Cart"
        className="cursor-pointer hover:text-gray-600"
      >
        <IoBagOutline className="size-5" />
      </Link>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-center text-xs text-white">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

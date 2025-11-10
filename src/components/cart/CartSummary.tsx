import { Link, useNavigate } from "react-router";
import formatToMoney from "../../utils/formatToMoney";

type CartSummaryProps = {
  totalPrice: number;
};

const CartSummary = ({ totalPrice }: CartSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">Subtotal</h3>
        <p className="font-bold">{formatToMoney(totalPrice)}</p>
      </div>
      <p className="mb-8 text-xs text-gray-500 md:text-sm">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="flex flex-col gap-4 text-center">
        <button
          onClick={() => navigate("/checkout")}
          disabled={totalPrice === 0}
          className="cursor-pointer rounded-md bg-gray-900 py-2 font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-gray-800 disabled:cursor-auto disabled:opacity-60"
        >
          Checkout
        </button>
        <p className="text-sm text-gray-500">
          or{" "}
          <Link
            to=""
            className="text-blue-500 transition-colors duration-300 hover:text-blue-600"
          >
            continue Shopping
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;

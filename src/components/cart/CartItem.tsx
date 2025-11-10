import type { CartItem as CartItemType } from "../../types";
import formatToMoney from "../../utils/formatToMoney";
import getImageUrl from "../../utils/getImageUrl";

type CartItemProps = {
  item: CartItemType;
  onRemove: (item: CartItemType) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <li className="flex gap-4 py-6">
      <div className="h-32 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={`${getImageUrl(item.coverBook)}`}
          alt={item.title}
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="mt-1 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm font-bold">{formatToMoney(item.price)}</p>
          </div>
          <p className="text-sm text-gray-500 capitalize">
            <strong>Category:</strong> {item.category}
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            <strong>Qty:</strong> {item.quantity}
          </p>
          <button
            type="button"
            onClick={() => onRemove(item)}
            className="cursor-pointer font-medium text-red-500 transition-colors duration-300 hover:text-red-600"
          >
            remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import type { CartItem as CartItemType } from "../../types";
import CartItem from "./CartItem";

type CartListProps = {
  cartItems: CartItemType[];
  onRemove: (item: CartItemType) => void;
};

const CartList = ({ cartItems, onRemove }: CartListProps) => {
  if (cartItems.length === 0) {
    return <p className="text-center text-gray-500">No product found.</p>;
  }

  return (
    <ul role="list" className="my-6 divide-y divide-gray-200">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default CartList;

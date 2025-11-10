import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { clearCart, removeFromCart } from "../../store/features/cart/cartSlice";
import type { CartItem } from "../../types";
import CartSummary from "./CartSummary";
import CartList from "./CartList";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleRemoveFromCart = (product: CartItem) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <section className="min-h-screen pt-28 pb-14">
      <div className="container mx-auto px-[3%] text-gray-600">
        {/* Card Item */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Shopping Cart</h3>
            <button
              type="button"
              onClick={handleClearCart}
              className="cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white shadow-sm transition-colors duration-300 hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>

          {/* Cart List */}
          <div>
            <CartList cartItems={cartItems} onRemove={handleRemoveFromCart} />
          </div>
        </div>

        {/* Subtotal Card */}
        <CartSummary totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default Cart;

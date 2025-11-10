import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import getImageUrl from "../../utils/getImageUrl";
import formatToMoney from "../../utils/formatToMoney";

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <section className="min-h-screen pt-28 pb-14">
      <div className="container mx-auto px-[3%] text-gray-600">
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h1 className="mb-8 text-2xl font-semibold text-gray-800">
              Checkout
            </h1>
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              Shipping Information
            </h2>
            <form action="" className="space-y-6">
              <div className="space-y-6">
                <div className="grid gap-1">
                  <label
                    htmlFor="name"
                    className="w-fit text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                  />
                </div>
                <div className="grid gap-1">
                  <label
                    htmlFor="email"
                    className="w-fit text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                  />
                </div>
                <div className="grid gap-1">
                  <label
                    htmlFor="phone"
                    className="w-fit text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter phone number"
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 grid gap-1">
                    <label
                      htmlFor="address"
                      className="w-fit text-sm font-medium text-gray-700"
                    >
                      Address / Street
                    </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter your address"
                      className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label
                      htmlFor="city"
                      className="w-fit text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="block w-full cursor-pointer rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                    >
                      <option value="" selected disabled>
                        Select City
                      </option>
                      <option value="">Indonesia</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-1">
                    <label
                      htmlFor="city"
                      className="w-fit text-sm font-medium text-gray-700"
                    >
                      Country / Region
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="block w-full cursor-pointer rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                    >
                      <option value="" selected disabled>
                        Select Country
                      </option>
                      <option value="">Indonesia</option>
                    </select>
                  </div>
                  <div className="grid gap-1">
                    <label
                      htmlFor="city"
                      className="w-fit text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="block w-full cursor-pointer rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                    >
                      <option value="" selected disabled>
                        Select State
                      </option>
                      <option value="">Indonesia</option>
                    </select>
                  </div>
                  <div className="grid gap-1">
                    <label
                      htmlFor="zipcode"
                      className="w-fit text-sm font-medium text-gray-700"
                    >
                      Zipcode
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      placeholder="Zipcode"
                      className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-gray-900 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-800"
              >
                Pay Now
              </button>
            </form>
          </div>

          {/* Review Cart */}
          <div className="flex-1 p-6">
            <h2 className="mb-8 text-2xl font-semibold text-gray-800">
              Review your cart
            </h2>
            <ul role="list" className="my-6 divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4 py-6">
                  <div className="h-32 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={`${getImageUrl(item.coverBook)}`}
                      alt={item.title}
                      className="h-full w-full object-cover object-bottom"
                    />
                  </div>

                  <div className="flex w-full flex-col">
                    <div className="w-full">
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">
                        <strong>Qty:</strong> {item.quantity}
                      </p>
                    </div>

                    <div className="flex flex-1 items-end text-sm">
                      <p className="text-sm font-bold">
                        {formatToMoney(item.price)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm">Subtotal</p>
                <strong className="text-gray-800">
                  {formatToMoney(totalPrice)}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Shipping</p>
                <strong className="text-gray-800">{formatToMoney(5)}</strong>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Total</p>
                <strong className="text-xl text-gray-800">
                  {formatToMoney(55)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

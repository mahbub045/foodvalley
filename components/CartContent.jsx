"use client";
import { Store } from "@/utils/Store";
import Image from "next/image";
import { useContext, useState } from "react";

const CartContent = () => {
  const [quantity, setQuantity] = useState(1);
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartHandler(item, newQuantity);
    }
  };

  const increaseQuantity = (item) => {
    if (item.quantity < item.countInStock) {
      const newQuantity = item.quantity + 1;
      updateCartHandler(item, newQuantity);
    }
  };

  return (
    <>
      {cartItems.length == 0 ? (
        <div className="text-center font-semibold rounded-md text-red-500 bg-white p-4 my-2">
          <p>There are no items in this cart!</p>
        </div>
      ) : (
        <div className="min-h-screen relative">
          {cartItems.map((item) => (
            <div
              key={item.slug}
              className="border-2 border-white rounded-md p-2 my-4 relative"
            >
              <div className="absolute -top-2 -right-2">
                <button
                  className="text-red-600 bg-white rounded-md p-1"
                  onClick={() => removeItemHandler(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <Image
                    src={item.image}
                    alt={item.image}
                    width={50}
                    height={300}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-white text-xs">{item.price}$/each</p>
                  <div className="text-white mt-2">
                    <div className="flex">
                      <div className="text-white mt-2 flex items-center">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="bg-slate-200 text-black px-3 py-1 rounded-l-md"
                        >
                          -
                        </button>
                        <p className="bg-white text-black px-4">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="bg-slate-200 text-black px-3 py-1 rounded-r-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <p className="text-lg text-white font-semibold">
                    {item.quantity * item.price}$
                  </p>
                </div>
              </div>
            </div>
          ))}
            <div className="absolute bottom-0 left-0 right-0 text-center bg-white py-2 -mx-2 -mb-2">
              <p className="font-semibold  text-red-500 mb-2">
                Sub Total:{" "}
                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}$
              </p>
              <button className="bg-red-500 text-white hover:bg-red-600 transition-all font-semibold px-6 py-1 rounded-md">
                Place Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
        </div>
      )}
    </>
  );
};

export default CartContent;
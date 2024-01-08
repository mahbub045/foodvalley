"use client";
import { Store } from "@/utils/Store";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const CartContent = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
const calculateTotal = (item) => {
  const pricePerItem = item.price; // Assuming 'price' is the actual price per item in the 'item' object
  const subtotal = quantity * pricePerItem;
  return subtotal;
};

  const calculateSubtotal = (item) => {
    const pricePerItem = item.price; // Assuming 'price' is the actual price per item in the 'item' object
    const subtotal = item.quantity * pricePerItem; // Consider item.quantity
    return subtotal;
  };

  const handleQuantityChange = () => {
    // Calculate total price based on the quantity of each item in the cart
    const totalPrice = cartItems.reduce((total, item) => {
      return total + calculateSubtotal(item);
    }, 0);

    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleQuantityChange();
  }, [quantity, cartItems]);

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.slug}
          className="border-[3px] border-white rounded-md p-2 my-4 relative"
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
                  <button
                    onClick={decreaseQuantity}
                    className="bg-white text-black px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <input
                    className="w-12 bg-slate-200 text-black text-center "
                    type="text"
                    readOnly
                    value={quantity}
                  />
                  <button
                    onClick={increaseQuantity}
                    className="bg-white text-black px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <p className="text-lg text-white font-semibold">{item.price * item.quantity}$</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center font-semibold text-red-500 bg-white p-4 my-2">
        <p>Sub Total: {totalPrice}$</p>
      </div>
    </>
  );
};

export default CartContent;

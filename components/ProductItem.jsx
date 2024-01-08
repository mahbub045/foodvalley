"use client";
import CartDrawer from "@/components/CartDrawer";
import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CartContent from "./CartContent";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  // const { cart } = state;
  const router = useRouter();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const handleToggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry, Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  
    // Open the cart drawer after adding an item
    setIsCartDrawerOpen(true);
  };
  

  return (
    <>
      <div className="card">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover rounded shadow cursor-pointer"
          />
        </Link>
        <div className="p-5">
          <Link legacyBehavior href={`/product/${product.slug}`}>
            <h2 className="text-lg font-bold">{product.name}</h2>
          </Link>
          <p className="">{product.brand}</p>
          <p className=" text-xs">{product.price}$/each</p>
          <p className="text-sm mt-3">{product.description}</p>
        </div>
        <div className="grid gap-1 items-center p-1">
          <button
            className="w-full py-1 font-semibold text-sm bg-red-500 rounded shadow outline-none hover:bg-red-600 active:bg-slate-400 transition"
            type="button"
            onClick={addToCartHandler}
          >
            Add to Order
          </button>
          <Link legacyBehavior href={`/product/${product.slug}`}>
            <button
              className="w-full py-1 font-semibold text-sm border-2 border-red-500 rounded shadow outline-none hover:bg-red-600 hover:border-red-600 active:bg-slate-400 transition"
              type="button"
            >
              Customize
            </button>
          </Link>
        </div>
      </div>
      {/* Drawer start */}
      {isCartDrawerOpen && (
        <>
          <div className="fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
            <div onClick={handleToggleCartDrawer} className="flex-1"></div>

            <CartDrawer
              isOpen={isCartDrawerOpen}
              onClose={handleToggleCartDrawer}
            >
              <CartContent />
            </CartDrawer>
          </div>
        </>
      )}
      {/* Drawer end */}
    </>
  );
};

export default ProductItem;

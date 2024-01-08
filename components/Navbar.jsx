"use client";
import { Store } from "@/utils/Store";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import CartContent from "./CartContent";
import CartDrawer from "./CartDrawer";

const Navbar = ({ title }) => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const handleToggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  return (
    <>
      <Head>
        <title>{title ? title + " - Food Valley" : "Food Valley"}</title>
      </Head>
      <nav className="flex items-center justify-between px-10 py-2 bg-red-200 text-gray-900">
        <div className="flex items-center gap-3">
          <Link legacyBehavior href="/">
            <a>
              <Image src="/logo.png" alt="Logo" width={64} height={48} />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="font-medium">MENU</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="font-medium">REWARDS</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="font-medium">LOCATIONS</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="font-medium">GIFT CARD</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="font-medium">LOGIN</a>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="relative cursor-pointer"
            onClick={handleToggleCartDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cart.cartItems.length >= 0 && (
              <span className="absolute top-0 -right-1 px-1 py-0 text-xs font-bold text-white bg-red-600 rounded-md">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </a>
          <Link legacyBehavior href="/">
            <a className="uppercase bg-red-600 text-white font-medium  px-8 py-2 rounded-md">
              Order Now
            </a>
          </Link>
        </div>
      </nav>
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

export default Navbar;

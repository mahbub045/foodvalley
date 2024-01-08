// drawer component
"use client";
import { Store } from "@/utils/Store";
import { useContext } from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const drawerClasses = isOpen ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-[99999] w-1/5 bg-white shadow-xl transform transition-transform duration-300 ${drawerClasses}`}
    >
      <div className={`h-full flex flex-col ${drawerClasses}`}>
        <div className="px-1 py-1">
          <div className="flex justify-between items-center">
            <div className="py-2 px-4 flex justify-center items-center gap-1 font-semibold text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cart.cartItems.length >= 0 && (
                <span>
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                   <span className="mx-1">Item</span>
                </span>
              )}
            </div>
            <div className="py-2 px-4">
              <button
                onClick={onClose}
                type="button"
                data-drawer-hide="drawer-body-scrolling"
                aria-controls="drawer-body-scrolling"
                className="text-red-500  border border-red-500 rounded-md font-semibold text-sm px-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        <div className="p-2 flex-grow overflow-y-auto bg-red-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;

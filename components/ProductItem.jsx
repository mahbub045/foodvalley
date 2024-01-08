"use client";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300} // Set your desired width
            height={200} // Set your desired height
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
          <Link legacyBehavior href={`/product/${product.slug}`}>
            <button
              className="w-full py-1 font-semibold text-sm bg-red-500 rounded shadow outline-none hover:bg-red-600 active:bg-slate-400 transition"
              type="button"
            >
              Add to Order
            </button>
          </Link>
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
    </>
  );
};

export default ProductItem;

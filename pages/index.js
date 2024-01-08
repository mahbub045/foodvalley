"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductItem from "@/components/ProductItem";
import data from "@/utils/data";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container">
        <div className="text-center">
          <h2 className="uppercase font-semibold text-red-500 text-3xl p-1">
            Chicken Crisper® Combos
          </h2>
          <div className="p-1">
            <ul className="flex justify-center items-center font-semibold text-xs">
              <li className="text-red-500">Menu</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right inline-block"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
                Chicken Crisper® Combos
              </li>
            </ul>
          </div>
          <p className="p-1 font-semibold">
            Find everything from our Big Mouth Burgers®, our always sizzling,
            Full-on Fajitas and our famous Chicken Crispers®
          </p>
        </div>
        <div className="flex justify-end mr-56 my-6">
          <button className="font-semibold border rounded-md p-2">
            Menu
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {/* productitem start */}
        <div className=" px-4 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
      </div>
      {/* footer start */}
      <Footer />
    </>
  );
};

export default Home;

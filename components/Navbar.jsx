import Head from "next/head";
import Link from "next/link";

const Navbar = ({title}) => {
  return (
    <>
    <Head>
        <title>{title ? title + " - Food Valley" : "Food Valley"}</title>
    </Head>
      <nav className="flex items-center justify-between px-10 py-2 bg-red-200 text-gray-900">
        <div className="flex items-center gap-3">
          <Link legacyBehavior href="/">
            <a className="">
              <img src="images/logo.png" alt="Logo" className="w-16 h-12" />
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
          <Link legacyBehavior href="/">
            <a className="">
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
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="uppercase bg-red-600 text-white font-medium  px-8 py-2 rounded-md">
              Order Now
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-8 text-lg">
        <a href="/">
          <img src="/leemaologo.png" alt="Nav" className="w-9/12" />
        </a>
        <Link
          to="/search"
          className="hover:text-tertiary transition-colors duration-300 xl:hidden text-white"
        >
          Search
        </Link>
        <div className="text-white [&>a]:mx-6 xl:block hidden">
          <Link
            to="/search"
            className="hover:text-tertiary transition-colors duration-300"
          >
            Search
          </Link>
          <a
            href="/"
            className="hover:text-tertiary transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="bg-primary text-black p-2 rounded-sm hover:bg-tertiary transition-colors duration-300"
          >
            Try It For Free
          </a>
        </div>
      </nav>
    </header>
  );
};

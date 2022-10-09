export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center w-11/12 mx-auto justify-between pt-4 text-lg">
        <a href="/">
          <img src="/leemaologo.png" alt="Nav" className="w-9/12" />
        </a>
        <div className="text-white [&>a]:mx-6 ">
          <a
            href="/"
            className="hover:text-[#FFD65B] transition-colors duration-300"
          >
            Shops
          </a>
          <a
            href="/"
            className="hover:text-[#FFD65B] transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="bg-[#00DAB0] text-black p-2 rounded-sm hover:bg-[#FFD65B] transition-colors duration-300"
          >
            Try It For Free
          </a>
        </div>
      </nav>
    </header>
  );
};

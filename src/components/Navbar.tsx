export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-8 text-lg">
        <a href="/">
          <img src="/leemaologo.png" alt="Nav" className="w-9/12" />
        </a>
        <div className="text-white [&>a]:mx-6 xl:block hidden">
          <a
            href="/"
            className="hover:text-tertiary transition-colors duration-300"
          >
            Shops
          </a>
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

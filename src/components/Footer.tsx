export const Footer = () => {
  return (
    <main className="xl:my-52 lg:mt-40  mt-32 text-white flex justify-between flex-wrap">
      <section className="w-full md:w-1/2 mb-6">
        <h1 className="xl:text-8xl lg:text-7xl text-5xl mb-4 font-extrabold break-normal">
          More fun<span className="text-gradient block">more chat.</span>
        </h1>
        <div className="flex">
          <a href="/" className="lg:mr-4 -mr-4">
            <img
              src="/appstore.png"
              alt="Download Leemao On The App Store"
              className="w-10/12 lg:w-full"
            />
          </a>
          <a href="/">
            <img
              src="/googleplay.png"
              className="w-10/12 lg:w-full"
              alt="Download Leemao On Google Play Store"
            />
          </a>
        </div>
      </section>
      <aside className="md:w-1/2 w-full [&>*]:my-6 [&>*]:block [&>*]:md:ml-8 [&>a]:text-lg">
        <h1 className="text-3xl font-extrabold">Quick Links</h1>

        <a href="/">Shops</a>
        <a href="/">Contact Us</a>
        <a href="/">Terms Of Use</a>
      </aside>
    </main>
  );
};

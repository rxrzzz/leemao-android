export const SectionFour = () => {
  return (
    <section className="xl:mt-52 lg:mt-40  mt-32 text-white">
      <h1 className="xl:text-8xl lg:text-7xl text-5xl font-extrabold break-normal">
        No type
        <span className="text-gradient block">Share</span>memes.
      </h1>
      <p className="xl:text-3xl lg:text-2xl md:text-xl text-white my-4">
        Lemao supports all your social and messaging platforms, share your meme
        across multiple media, type less meme more.
      </p>
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
  );
};

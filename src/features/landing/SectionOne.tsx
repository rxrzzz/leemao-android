export const SectionOne = () => {
  return (
    <section className="xl:mt-64 lg:mt-40 mt-32">
      <h1 className="xl:text-8xl lg:text-7xl text-5xl font-extrabold text-gradient break-words">
        Bring More Fun To Your Conversations
      </h1>
      <p className="xl:text-3xl lg:text-2xl md:text-xl text-white my-4">
        Leemao helps you save your favourite and most used meme. Why scroll
        endlessly when it&apos;s by the corner!
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

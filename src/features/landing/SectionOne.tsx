export const SectionOne = () => {
  return (
    <section className="xl:mt-44 lg:mt-40 md:mt-30 mt-20 w-1/2">
      <h1 className="xl:text-8xl lg:text-8xl text-6xl font-extrabold text-gradient">
        Bring More Fun To Your Conversations.
      </h1>
      <p className="text-3xl text-white my-4">
        Leemao helps you save your favourite and most used meme. Why scroll
        endlessly when it&apos;s by the corner!
      </p>
      <div className="flex">
        <a href="/" className="mr-4">
          <img src="/appstore.png" alt="Download Leemao On The App Store" />
        </a>
        <a href="/">
          <img
            src="/googleplay.png"
            alt="Download Leemao On Google Play Store"
          />
        </a>
      </div>
    </section>
  );
};

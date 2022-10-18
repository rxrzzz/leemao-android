import TextTransition, { presets } from "react-text-transition";
import React, { useEffect, useState } from "react";

const headerText = [
  "Bring More \n Fun To Your \n Conversations",
  "Make",
  "Curate",
  "No type"
];
const middleText = [
  "",
  " worthy \n memes     ",
  "treasured \n memes",
  "share\nmemes"
];
const bottomTextOne = [
  "Leemao helps you save your \n favourite and most used meme.",
  "Personalise your meme \n experience by creating your",
  "Leemao helps you save \n your favourite and most used meme.",
  "Lemao supports all your \n social and messaging platforms,"
];
const bottomTextTwo = [
  " Why scroll endlessly \n when it's by the corner!",
  "best meme moment, \n customize it, and make it yours.",
  " why scroll endlessly \nwhen it's by the corner!",
  "share your meme across \nmultiple media, type less meme more."
];

export const SectionOne = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="xl:mt-50 lg:mt-40 mt-32">
      <div className=" max-w-2xl">
        <TextTransition direction="down" springConfig={presets.gentle}>
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl  text-white font-extrabold">
            <span className=" text-gradient blockss">
              {headerText[index % headerText.length]}
            </span>
            <span className="block">
              {middleText[index % middleText.length]}
            </span>
          </h1>
          <h1 className="lg:text-2xl md:text-xl text-md my-6 text-white">
            <span>{bottomTextOne[index % bottomTextOne.length]}</span>
            <span>{bottomTextTwo[index % bottomTextTwo.length]}</span>
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
        </TextTransition>
      </div>
      <div className="flex"></div>
    </section>
  );
};

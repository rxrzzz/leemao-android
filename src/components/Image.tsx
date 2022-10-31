import { useState } from "react";

type ImageProps = {
  alt: string;
  className: string;
  src: string;
  height?: string | number;
  width?: string | number;
};

export const Image = ({ alt, className, src, height, width }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (isLoading === true && isError !== true) {
    <div
      className="rounded-md shadow-sm shadow-slate-800 h-full
   w-full flex flex-col justify-center items-center bg-[#131613] py-5"
    >
      <img
        src="/errormoon.png"
        alt=""
        className=" shadow-md  rounded-full  shadow-gray-400"
      />
      <p className="w-9/12 mx-auto mt-2 text-gray-300 font-medium">
        Image is loading...
      </p>
    </div>;
  }

  if (isError === true) {
    return (
      <div
        className="rounded-md shadow-sm shadow-slate-800 h-full
       w-full flex flex-col justify-center items-center bg-[#131613] py-8"
      >
        <img
          src="/errormoon.png"
          alt=""
          className=" shadow-md  rounded-full  shadow-gray-400"
        />
        <p className="w-9/12 mx-auto mt-2 text-gray-300 font-medium">
          There was an error loading this image.
        </p>
      </div>
    );
  }

  return (
    <>
      <img
        alt={alt}
        className="rounded-md h-full w-full object-cover"
        src={src}
        height={height}
        width={width}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </>
  );
};

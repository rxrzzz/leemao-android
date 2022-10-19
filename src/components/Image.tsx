import { useState } from "react";

type ImageProps = {
  alt: string;
  className: string;
  src: string;
};

export const Image = ({ alt, className, src }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (isLoading === true && isError !== true) {
    <div>
      <img
        alt={alt}
        style={{
          border: "2px solid purple",
          width: "100%",
          height: "100%",
          padding: "2rem",
          marginBlock: "2rem",
        }}
        src="/leemaologo.png"
      />
      ;
    </div>;
  }

  if (isError === true) {
    return (
      <div className="rounded-md shadow-sm shadow-slate-800 h-full w-full flex flex-col justify-center items-center bg-[#131613]">
        <img src="/errormoon.png" alt="" className=" shadow-md  rounded-full  shadow-gray-400"/>
        <p className="w-9/12 mx-auto mt-2 text-gray-300 font-medium">There was an error loading this image.</p>

      </div>
    );
  }

  return (
    <>
      <img
        alt={alt}
        className={className}
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </>
  );
};

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
      <div className="w-full border h-auto ">
        <img
          alt={alt}
          style={{
            border: "2px solid purple",
            width: "100%",
            marginBlock: "2rem",
            padding: "2rem",
          }}
          src="/leemaologo.png"
        />
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

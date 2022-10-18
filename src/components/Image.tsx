import { useState } from "react";

type ImageProps = {
  alt: string;
  className: string;
  src: string;
};

export const Image = ({ alt, className, src }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (isLoading && isError) {
    return (
      <img
        alt={alt}
        style={{
          border: "2px solid purple",
          width: "100%",
          marginBlock: "2rem",
        }}
        src="/leemaologo.png"
      />
    );
  }
  if (!isLoading && isError) {
    return (
      <div className="flex items-center justify-center flex-col">
      <img
        alt={alt}
        style={{
          border: "2px solid purple",
          width: "100%",
          marginBlock: "2rem",
        }}
        src="/leemaologo.png"
      />
      <p>An error occured.</p>
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

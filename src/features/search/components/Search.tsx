import { SingleMeme, useMemes } from "../api/useMemes";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, {
  createRef,
  Fragment,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Image } from "../../../components/Image";

export const Search = () => {
  const { memes: data } = useMemes();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imageRefs, setImageRefs] = useState<
    RefObject<HTMLDivElement>[] | null
  >();
  const [memes, setMemes] = useState<SingleMeme[] | undefined>();
  const defaultMemes = data && data.data.memes.slice(1, 19);

  const handleImageMenuOpen = (index: number) => {
    if (isOpen === false) {
      imageRefs && imageRefs[index].current?.classList.remove("hidden");
      setIsOpen(true);
    }
  };

  const handleImageMenuClose = (index: number) => {
    if (isOpen === true) {
      imageRefs && imageRefs[index].current?.classList.add("hidden");
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (searchTerm === "") {
      const defaultRefs =
        defaultMemes && defaultMemes.map(() => createRef<HTMLDivElement>());
      setImageRefs(defaultRefs);
    } else {
      const memeRefs = memes && memes.map(() => createRef<HTMLDivElement>());
      setImageRefs(memeRefs);
    }
  }, [searchTerm, data]);

  useMemo(() => {
    const matchingMemes =
      data &&
      data.data.memes.filter(
        (meme) =>
          meme.tags
            .map((meme) => meme.toLowerCase())
            .join(" ")
            .includes(searchTerm.toLowerCase()) ||
          meme.title.toLowerCase() === searchTerm.toLowerCase()
      );

    searchTerm !== "" && setMemes(matchingMemes);
  }, [searchTerm]);

  return (
    <main className="">
      <header className="bg-[#131613]">
        <nav className="flex justify-between py-4 px-12 items-center">
          <a href="/">
            <img src="/leemaologo.png" alt="Home" width="120px" />
          </a>
          <div
            className=" flex items-center p-2 rounded-md
          bg-[#1E201E] pointer-events-none focus-within:bg-[#828482]"
          >
            <div
              className="w-[20px] h-[20px] bg-[url('/searchdefault.png')]
             "
            ></div>
            <input
              type="text"
              placeholder="Search meme, gif"
              className=" placeholder:text-white text-white font-thin bg-[#1E201E]
              focus:bg-[#828482] peer-focus:bg-[url('/searchfocus.png')]
              md:min-w-[400px] rounded-sm ml-3 focus:outline-none pointer-events-auto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="border border-primary py-2 px-6
           rounded-md text-primary"
          >
            Create
          </button>
        </nav>
      </header>
      {searchTerm !== "" && memes?.length === 0 ? (
        <div className="min-h-screen w-full flex items-center  flex-col">
          <p className="text-9xl rounded-full mt-40 shadow-slate-400">🌚</p>
          <p className="text-2xl font-medium text-white mt-2">
            No images match your search term.
          </p>
        </div>
      ) : (
        <div className="bg-[#010401] min-h-screen">
          {searchTerm === "" ? (
            <>
              <br />
              <ResponsiveMasonry
                className="mx-8"
                columnsCountBreakPoints={{
                  400: 2,
                  750: 3,
                  1000: 4,
                  1200: 6,
                }}
              >
                <Masonry>
                  {defaultMemes &&
                    defaultMemes.map((meme, index) => (
                      <Fragment key={meme.url}>
                        <button
                          onClick={() => handleImageMenuOpen(index)}
                          className="p-2"
                        >
                          <Image
                            alt={meme.tags[0]}
                            className="rounded-sm"
                            src={meme.url}
                          />
                        </button>
                        <div
                          ref={imageRefs && imageRefs[index]}
                          className=" w-10/12 max-w-[400px] rounded-md fixed top-[40%]
                       left-1/2 md:h-[500px] transform -translate-x-1/2 hidden
                       -translate-y-1/2 z-10 bg-[#333] h-3/6 backdrop:opacity-80"
                        >
                          <div className="w-11/12 mx-auto flex flex-col">
                            <button
                              className="mt-4  self-end"
                              onClick={() => handleImageMenuClose(index)}
                            >
                              <img
                                src="/close.svg"
                                alt="Close"
                                className="w-5"
                              />
                            </button>
                            <img
                              src={meme.url}
                              alt={meme.tags[0]}
                              className="rounded-md mt-4"
                            />
                            <button className="bg-primary mt-4 py-1 rounded-md">
                              Download
                            </button>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            </>
          ) : (
            <>
              <br />

              <ResponsiveMasonry
                className="mx-8"
                columnsCountBreakPoints={{
                  400: 2,
                  750: 3,
                  800: 3,
                  1000: 4,
                  1400: 5,
                  1800: 6,
                }}
              >
                <Masonry>
                  {memes &&
                    typeof memes !== "string" &&
                    memes.map((meme, index) => (
                      <Fragment key={meme.url}>
                        <button
                          onClick={() => handleImageMenuOpen(index)}
                          className="h-full w-full p-2"
                        >
                          <Image
                            alt={meme.tags[0]}
                            className="rounded-md"
                            src={meme.url}
                          />
                        </button>
                        <div
                          ref={imageRefs && imageRefs[index]}
                          className=" w-10/12 max-w-[400px] rounded-md fixed top-[40%]
                       left-1/2 md:h-[500px] transform -translate-x-1/2 hidden
                       -translate-y-1/2 z-10 bg-[#333] h-3/6 backdrop:opacity-80 "
                        >
                          <div className="w-11/12 mx-auto flex flex-col">
                            <button
                              className="mt-4  self-end"
                              onClick={() => handleImageMenuClose(index)}
                            >
                              <img
                                src="/close.svg"
                                alt="Close"
                                className="w-5"
                              />
                            </button>
                            <img
                              src={meme.url}
                              alt={meme.tags[0]}
                              className="rounded-md mt-4"
                            />
                            <button className="bg-primary mt-4 py-1 rounded-md">
                              Download
                            </button>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            </>
          )}
        </div>
      )}
    </main>
  );
};

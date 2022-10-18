import { SingleMeme, useMemes } from "../api/useMemes";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { createRef, useMemo, useRef, useState } from "react";
import { Image } from "../../../components/Image";

export const Search = () => {
  const { memes: data, isLoading, error } = useMemes();
  const [searchTerm, setSearchTerm] = useState("");
  const [memes, setMemes] = useState<SingleMeme[] | string | undefined>("");
  const defaultMemes = data && data.data.memes.slice(1, 20);



  const refs =
    searchTerm === ""
      ? defaultMemes && defaultMemes.map(() => createRef<HTMLImageElement>())
      : memes &&
        typeof memes !== "string" &&
        memes.map(() => createRef<HTMLImageElement>());

  useMemo(() => {
    const matchingMemes =
      data &&
      data.data.memes.filter(
        (meme) =>
          meme.tags
            .map((meme) => meme.toLowerCase())
            .includes(searchTerm.toLowerCase()) ||
          meme.title.toLowerCase() === searchTerm.toLowerCase()
      );

    searchTerm !== "" && setMemes(matchingMemes);
  }, [searchTerm]);

  return (
    <main className="relatice">
    <div className="b">
      <h1>sike</h1>
    </div>
      <header className="bg-[#131613]">
        <nav className="flex justify-between py-4 px-12">
          <a href="/">
            <img src="/leemaologo.png" alt="Home" width="120px" />
          </a>
          <input
            type="text"
            placeholder="Search meme, gif"
            className=" placeholder:text-white text-white font-thin
             bg-[#1E201E] min-w-[400px] p-2 rounded-sm "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="border border-primary py-2 px-6 rounded-md text-primary">
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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 750: 3, 1000: 4, 1300: 6 }}
          className="mx-8 mt-8"
        >
          {searchTerm === "" ? (
            <Masonry>
              {defaultMemes &&
                defaultMemes.map((meme) => (
                  <div key={meme.url} className="p-4">
                    <Image
                      alt={meme.tags[0]}
                      className="rounded-md"
                      src={meme.url}
                    />
                  </div>
                ))}
            </Masonry>
          ) : (
            <Masonry>
              {memes &&
                typeof memes !== "string" &&
                memes.map((meme) => (
                  <div key={meme.url} className="p-4">
                    <Image
                      alt={meme.tags[0]}
                      className="rounded-md"
                      src={meme.url}
                    />
                  </div>
                ))}
            </Masonry>
          )}
        </ResponsiveMasonry>
      )}
    </main>
  );
};

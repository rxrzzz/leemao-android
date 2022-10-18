import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Meme = {
  status: boolean,
  message: string,
  data: {
    totalResources: number,
    page: number,
    memes: {
      tags: string[],
      _id: string,
      color: string,
      height: number,
      width: number,
      uploader: string,
      title: string,
      source: string,
      resourceType: "gif" | "img",
      url: string,
      createdAt: string
      updatedAt: string,
      __v: number
    }[]
  }
}

export type SingleMeme = {
  tags: string[],
  _id: string,
  color: string,
  height: number,
  width: number,
  uploader: string,
  title: string,
  source: string,
  resourceType: "gif" | "img",
  url: string,
  createdAt: string
  updatedAt: string,
  __v: number
}

export const useMemes = () => {
  const fetchMemes = async (): Promise<Meme> => {
    const { data } = await axios.get("https://young-eyrie-74277.herokuapp.com/v1/memes/search");
    return data;
  };

  const { data: memes, isLoading, isError, error } = useQuery(["memes"], fetchMemes);
  return { memes, isLoading, isError, error };
};
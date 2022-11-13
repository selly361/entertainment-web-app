import type { showsType } from "types/types";
import { useState } from "react";

export const useSearch = (data: showsType | null | undefined) => {
  const [searchInput, setSearchInput] = useState("");

  let words = searchInput.split(" ").length === 0 ? searchInput.split("") : searchInput.split(" ");

  let results = [];

  for (let word of words) {
    let shows = data?.filter((show) => show.title.toLowerCase().includes(word));
    if (shows?.length) {
      results.push(...shows);
    }
  }

  let resultsLength = results.length;

  

  return { results, searchInput, setSearchInput, resultsLength };
};

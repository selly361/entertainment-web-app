import React, { createContext, useEffect, useState } from "react";

import data from "data/data.json";
import type { showsType } from "types/types";

interface Icontext {
  shows: showsType;
  bookMarkedMovies: showsType;
  bookMarkedTvSeries: showsType;
  toggleBookMark: Function;
  trendingShows: showsType;
}

export const ContextProvider = createContext<Icontext | null>(null);

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [shows, setShows] = useState<showsType>(
    JSON.parse(localStorage.getItem("shows") || JSON.stringify(data))
  );

  const bookMarkedMovies = shows.filter(
    (show) => show.category === "Movie" && show.isBookmarked
  );
  const bookMarkedTvSeries = shows.filter(
    (show) => show.category === "Tv-Series" && show.isBookmarked
  );
  const trendingShows = shows.filter((show) => show.isTrending);
  const toggleBookMark = (title: string) => {
    let newShows = shows;
    let film = newShows.find((show) => show.title === title);
    if (film) film.isBookmarked = !film.isBookmarked;
    setShows(newShows);
  };

  useEffect(() => {
    localStorage.setItem("shows", JSON.stringify(shows));
  }, [JSON.stringify(shows)]);

  return (
    <ContextProvider.Provider
      value={{
        shows,
        bookMarkedMovies,
        bookMarkedTvSeries,
        toggleBookMark,
        trendingShows,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextWrapper;

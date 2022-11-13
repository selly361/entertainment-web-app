import React, { useContext, useState } from "react";

import { ContextProvider } from "context/ContextProvider";
import IntroSlider from "components/templates/HomePageTemp/IntroSlider/IntroSlider";
import SearchBar from "components/shared/SearchBar/SearchBar";
import styled from "styled-components";
import { useSearch } from "hooks/useSearch";

const StyledMain = styled.main`
  display: grid;
  gap: 40px;
  overflow-y: auto;
  height: 100vh;
`;

const HomePage = () => {
  const context = useContext(ContextProvider);
  const { results, searchInput, setSearchInput, resultsLength } = useSearch(context?.shows);



  return (
    <StyledMain>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <IntroSlider trendingShows={context?.trendingShows} />
    </StyledMain>
  );
};

export default HomePage;

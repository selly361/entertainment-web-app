import React from "react";
import { SearchIcon } from "assets/icons";
import styled from "styled-components";

interface Iprops {
  searchInput: string;
  setSearchInput: Function;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    transform: scale(0.8);
  }
`;

const Input = styled.input`
  width: 95%;
  font-size: 1.3rem;
  background-color: transparent;
  caret-color: var(--color-red);
  padding-block: 0.5rem;
  border-bottom: 1px solid transparent;
  color: white;
  font-weight: 500;
  transition: 1s border;

  &:focus {
    border-bottom-color: var(--color-greyish-blue);
  }
`;

const SearchBar = ({ searchInput, setSearchInput }: Iprops) => {
  return (
    <Container>
      <SearchIcon />
      <Input
        placeholder="Search for Movies or Tv Series"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </Container>
  );
};

export default SearchBar;

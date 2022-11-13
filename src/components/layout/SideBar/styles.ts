import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  width: 200px;

  path {
    transition: 1s fill ease;
  }

  .active {
    path {
      fill: var(--color-white);
    }
  }

  svg:hover {
    path {
      fill: var(--color-red);
    }
  }
`;

export const StyledAside = styled.aside`
  width: 120px;
  height: 90%;
  position: relative;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;
  background-color: var(--color-semi-dark-blue);

  .logo {
    margin-bottom: 3.4rem;
  }

  @media (max-width: 728px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.6rem;
    max-height: 5.6rem;
  }

`;

export const Navigation = styled.nav`
  display: grid;
  gap: 1.3rem;
`
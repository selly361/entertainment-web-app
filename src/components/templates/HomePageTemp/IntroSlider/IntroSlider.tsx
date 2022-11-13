import React from "react";
import type { showsType } from "types/types";
import styled from "styled-components";

interface Iprops {
  trendingShows: showsType | undefined;
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
`;

const Title = styled.h2``;

const Sliders = styled.div`
  display: flex;
  gap: 1rem;
  height: max-content;
  overflow-x: auto;
  padding: 1rem;
  border-radius: 8px;
`;

const Slider = styled.div<{ bg: string }>`
  min-width: 470px;
  height: 230px;
  background: url(${(props) => props.bg}) no-repeat center/contain;
  position: relative;
  border-radius: 8px;
`;

const Information = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const IntroSlider = ({ trendingShows }: Iprops) => {
  return (
    <Wrapper>
      <Title>Trending</Title>
      <Sliders>
        {trendingShows?.map((show) => (
          <Slider bg={show.thumbnail.trending?.large || ""}>
            <Information></Information>
          </Slider>
        ))}
      </Sliders>
    </Wrapper>
  );
};

export default IntroSlider;

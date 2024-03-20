import React from "react";
import styled from "styled-components";
import StatsPreview from "../StatsPreview";
import { QUERIES } from "../../constants.js";

const App = () => {
  return (
    <Main>
      <StatsPreview />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  background-color: var(--color-very-dark-blue);

  min-height: 780px;
  @media ${QUERIES.laptopAndUp} {
    min-height: 446px;
  }
`;

export default App;

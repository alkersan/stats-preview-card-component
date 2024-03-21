import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../../constants.js";

const StatItem = ({ name, value }) => {
  return (
    <StatsItemWrapper>
      <h3>{value}</h3>
      <p>{name}</p>
    </StatsItemWrapper>
  );
};

const StatsItemWrapper = styled.li`
  h3 {
    font-size: ${24 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    color: var(--color-white);
  }

  p {
    margin-top: 8px;
    font-family: "Lexend Deca", sans-serif;
    font-size: ${13 / 16}rem;
    color: var(--color-white-a75);
    text-transform: uppercase;
  }
`;

const StatsPreview = () => {
  const stats = [
    { name: "companies", value: "10k+" },
    { name: "templates", value: "314" },
    { name: "queries", value: "12M+" },
  ];

  return (
    <Wrapper>
      <Logo>
        <picture>
          <source
            srcSet="image-header-desktop.jpg"
            type="image/jpeg"
            media={QUERIES.laptopAndUp}
          />
          <img src="image-header-mobile.jpg" alt="" />
        </picture>
      </Logo>
      <Content>
        <Header>
          Get <Highlight>insights</Highlight> that help your business grow.
        </Header>
        <Description>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </Description>
        <StatsList>
          {stats.map((stat) => (
            <StatItem key={stat.name} name={stat.name} value={stat.value} />
          ))}
        </StatsList>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-dark-blue);

  max-width: 327px;

  border-radius: 8px;
  /* To prevent content spill over rounded corners */
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row-reverse;
    max-width: 1110px;
  }
`;

const Logo = styled.div`
  background-color: var(--color-soft-violet);

  img {
    display: block;
    width: 100%;
    mix-blend-mode: multiply;
    filter: opacity(75%);
  }
`;

const Content = styled.section`
  padding: 40px 32px 32px 32px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;

  @media ${QUERIES.laptopAndUp} {
    padding: 72px 110px 0 72px;
  }
`;

const Header = styled.h1`
  color: var(--color-white);
  font-size: ${28 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  text-align: center;
  line-height: 1.15;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${36 / 16}rem;
    text-align: start;
  }
`;

const Highlight = styled.em`
  font-style: normal;
  color: var(--color-soft-violet);
`;

const Description = styled.p`
  margin-top: 14px;
  color: var(--color-white-a75);
  text-align: center;
  line-height: 1.65;
  font-size: ${15 / 16}rem;
  @media ${QUERIES.laptopAndUp} {
    margin-top: 27px;
    text-align: start;
  }
`;

const StatsList = styled.ul`
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: end;
    gap: 64px;
    margin-top: 72px;
    text-align: start;
  }
`;

export default StatsPreview;

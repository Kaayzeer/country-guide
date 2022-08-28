//styled components
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1200px;
  overflow-x: hidden;
  padding: 0 40px;
  margin: 2rem auto;

  @media screen and (min-width: 1200px) {
    overflow-x: visible;
  }

  .countryName {
    font-size: 18px;
    font-weight: 800;
    line-height: 20px;
  }
  .population {
  }

  .region {
  }
  .capital {
  }
  span {
    font-weight: lighter;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "card", "card";
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "card", "card", "card";
    grid-gap: 40px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "card", "card", "card", "card";
    grid-gap: 80px;
  }
`;

const StyledCard = styled.article`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 600;
  grid-area: "card";
  border-radius: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  min-height: 50%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StyledInfo = styled.div`
  height: 100%;

  padding-bottom: 20px;
  padding-left: 1.2rem;
  margin-top: 10px;
  line-height: 10px;
  font-size: 14px;
  letter-spacing: 1px;
`;

export { StyledSection, StyledGrid, StyledCard, StyledImg, StyledInfo };

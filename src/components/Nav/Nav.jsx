import React from "react";
//styled-components
import styled from "styled-components";
//react router
import { useNavigate } from "react-router-dom";
const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 5px 8px -5px rgba(121, 121, 121, 0.72);
`;

const StyledNav = styled.nav`
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 1.4rem;
  letter-spacing: 1px;
`;

const StyledH4 = styled.h4`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
  }
`;
const StyledToggleButton = styled.button`
  border: none;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.2rem 0rem;
  background-color: transparent;
  font-family: "Nunito Sans";
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.3 ease-in-out;
  }
`;

const StyledSpan = styled.span`
  border: none;
  margin: 4px;
`;

export default function Nav({ toggleTheme, isDarkTheme }) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledNav>
        <StyledH4 onClick={() => navigate("/")}>Where in the world?</StyledH4>
        <StyledToggleButton onClick={toggleTheme}>
          {isDarkTheme ? (
            <StyledSpan aria-label="Light mode" role="img">
              🌞
            </StyledSpan>
          ) : (
            <StyledSpan aria-label="Dark mode" role="img">
              🌜
            </StyledSpan>
          )}
          dark mode
        </StyledToggleButton>
      </StyledNav>
    </StyledHeader>
  );
}

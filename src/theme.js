import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    margin: 0;
    padding: 0;
    font-family:  "Roboto", 
}
`;

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  elements: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
};

export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  element: "hsl(209, 23%, 22%)",
};

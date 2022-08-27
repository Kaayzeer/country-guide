import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
}

input {
  background-color: ${({ theme }) => theme.elements};
}

select {
  background-color: ${({ theme }) => theme.elements};
}

text {
  color: ${({ theme }) => theme.text};
}

article {
  background-color: ${({ theme }) => theme.elements};;
}
`;

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  elements: "hsl(0, 0%, 100%)",
};

export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  elements: "hsl(209, 23%, 22%)",
};

/* - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) ok
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%) om
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%) ok
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%) ok
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%) ok
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%) ok */

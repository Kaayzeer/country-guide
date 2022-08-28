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
  outline: ${({ theme }) => theme.outline};
  box-shadow: ${({ theme }) => theme.boxShadow};
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;  
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-padding-end: 20px;
    -moz-padding-end: 20px;
    -webkit-padding-start: 2px;
    -moz-padding-start: 2px;
    display: flex;
    padding: 0.8rem 1.4rem;
    width: 100%;
    min-width: 160px;
    
    border: none;
    overflow: hidden;
    outline: 0;
    cursor: pointer;
    border-radius: 3px;
    position: relative;
    margin: 0;
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.elements};
}

text {
  color: ${({ theme }) => theme.text};
}

article {
  background-color: ${({ theme }) => theme.elements};;
}

.icon {
  color: ${({ theme }) => theme.text};;
}

option {
  color: ${({ theme }) => theme.text}
}
`;

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  elements: "hsl(0, 0%, 100%)",
  outline: "#ecdcdc",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
};

export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  elements: "hsl(209, 23%, 22%)",
  outline: "#2d2b2bc9",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
};

/* - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) ok
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%) om
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%) ok
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%) ok
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%) ok
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%) ok */

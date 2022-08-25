import { useState } from "react";

// styled components
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

console.log(GlobalStyles);

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div>
          <GlobalStyles />
          <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <h1>Hello!</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

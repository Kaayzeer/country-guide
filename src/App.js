import { useState } from "react";

// styled components
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Search />
      </ThemeProvider>
    </>
  );
}

export default App;

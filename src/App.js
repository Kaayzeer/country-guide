import { useState } from "react";
//react-router-dom
import { Routes, Route, Link } from "react-router-dom";
// styled components
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
//components
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  //themestate
  const [theme, setTheme] = useState("light");

  //theme variable
  const isDarkTheme = theme === "dark";
  //theme Toggler
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <div style={{ width: "100vw" }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { useState } from "react";

// styled components
import { ThemeProvider } from "styled-components";
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
          <h1>Hello!</h1>
          <button onClick={toggleTheme}>
            {isDarkTheme ? (
              <span aria-label="Light mode" role="img">
                🌞
              </span>
            ) : (
              <span aria-label="Dark mode" role="img">
                🌜
              </span>
            )}
          </button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

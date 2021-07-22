import About from "./sections/About";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import {createMuiTheme, ThemeProvider} from "@material-ui/core"
import { DataProvider } from "./context";

// Creating a theme
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <div>
          <Header /> <About />
          <Projects />
          <Experience />
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;

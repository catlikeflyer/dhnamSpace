import About from "./sections/About";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { DataProvider } from "./context";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Uploaders from "./sections/Uploaders";

// Creating a theme
const theme = createMuiTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Orbitron",
    },
    h2: {
      fontFamily: "Orbitron",
    },
    h3: {
      fontFamily: "Orbitron",
    },
    h4: {
      fontFamily: "Orbitron",
    },
    h5: {
      fontFamily: "Orbitron",
    },
    h6: {
      fontFamily: "Orbitron",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DataProvider>
              <Navbar />
              <Header />
              <About />
              <Projects />
              <Experience />
            </DataProvider>
          </Route>
          <Route exact path="/uploader-for-me">
            <Uploaders />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

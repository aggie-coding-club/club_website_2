import "./App.css";
import Header from "./components/sections/Header/Header";
import Welcome from "./components/sections/Welcome/Welcome";
import WhatWeDo from "./components/sections/WhatWeDo/WhatWeDo";
import HowToJoin from "./components/sections/HowToJoin/HowToJoin";
import Schedule from "./components/sections/Schedule/Schedule";
import Projects from "./components/sections/Projects/Projects";
import OfficerTeam from "./components/sections/OfficerTeam/OfficerTeam";
import Footer from "./components/sections/Footer/Footer";

import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3766B4",
    },
    secondary: {
      main: "#f50057",
    },
    info: {
      main: "#EEF6FF",
    },
    text: {
      primary: "#001030",
      secondary: "#3766b4",
      info: "#969696",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Header />
          <Welcome />
          <WhatWeDo />
          <HowToJoin />
          <Schedule />
          <Projects />
          <OfficerTeam />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

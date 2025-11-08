import "./App.css";
import Header from "./components/sections/Header/Header";
import Footer from "./components/sections/Footer/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import OfficersPage from "./pages/OfficersPage";
import SponsorsPage from "./pages/SponsorsPage";
import JoinPage from "./pages/JoinPage";
import EventsPage from "./pages/EventsPage";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    breakpoints: {
      values: {
        sm: 400,
        md: 600,
        lg: 800,
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <main className="sm:w-[75%] w-[95%] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/officers" element={<OfficersPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/events" element={<EventsPage />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

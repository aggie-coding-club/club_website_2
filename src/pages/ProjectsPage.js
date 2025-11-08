import Projects from "../components/sections/Projects/Projects";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import projectsBannerImage from "../static/images/banners/projects.JPG";

export default function ProjectsPage() {
  const theme = useTheme();

  const imageBannerStyle = {
    width: "100vw",
    minHeight: "400px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "60px",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
    overflow: "hidden",
  };

  const bannerImageStyle = {
    position: "absolute",
    top: "-40%",
    left: 0,
    width: "100%",
    height: "140%",
    objectFit: "cover",
    opacity: 0.5,
  };

  const bannerOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    opacity: 0.5,
  };

  const bannerTitleStyle = {
    position: "relative",
    zIndex: 1,
    color: "#ffffff",
    fontSize: "64px",
    fontWeight: 600,
    textAlign: "center",
    margin: 0,
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      <Box sx={imageBannerStyle}>
        <img
          src={projectsBannerImage}
          alt="Aggie Coding Club Projects"
          style={bannerImageStyle}
        />
        <Box sx={bannerOverlayStyle} />
        <h1 style={bannerTitleStyle}>Projects</h1>
      </Box>
      <Projects />
    </>
  );
}

import Sponsors from "../components/sections/Sponsors/Sponsors";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import sponsorsBannerImage from "../static/images/banners/sponsors.jpg";

export default function SponsorsPage() {
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
          src={sponsorsBannerImage}
          alt="Aggie Coding Club Sponsors"
          style={bannerImageStyle}
        />
        <Box sx={bannerOverlayStyle} />
        <h1 style={bannerTitleStyle}>Sponsors</h1>
      </Box>
      <Sponsors />
    </>
  );
}

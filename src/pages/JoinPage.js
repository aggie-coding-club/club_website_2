import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import joinBannerImage from "../static/images/banners/join.JPG";
import HowToJoin from "../components/sections/HowToJoin/HowToJoin";

export default function JoinPage() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    top: "0%",
    left: 0,
    width: "100%",
    height: "100%",
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
          src={joinBannerImage}
          alt="Join Aggie Coding Club"
          style={bannerImageStyle}
        />
        <Box sx={bannerOverlayStyle} />
        <h1 style={bannerTitleStyle}>Join</h1>
      </Box>
      <HowToJoin />
    </>
  );
}

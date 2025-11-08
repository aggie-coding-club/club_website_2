import OfficerTeam from "../components/sections/OfficerTeam/OfficerTeam";
import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import aboutUsImage from "../static/images/aboutus/DSC_6677.jpg";
import aboutUsBannerImage from "../static/images/banners/aboutus.jpg";

export default function OfficersPage() {
  const theme = useTheme();

  const statsContainerStyle = {
    margin: "60px auto",
    maxWidth: "1200px",
    padding: "0 20px",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: "30px",
    marginBottom: "60px",
  };

  const statCardStyle = {
    backgroundColor: theme.palette.info.main || "#EEF6FF",
    borderRadius: "16px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    },
  };

  const statNumberStyle = {
    fontSize: "48px",
    fontWeight: 700,
    color: theme.palette.primary.main,
    margin: "0 0 12px 0",
    lineHeight: 1.2,
  };

  const statLabelStyle = {
    fontSize: "18px",
    color: theme.palette.text.primary,
    margin: 0,
    fontWeight: 500,
  };

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "40px",
    alignItems: "center",
    marginBottom: "50px",
  };

  const descriptionContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: 1.8,
    color: theme.palette.text.primary,
    textAlign: {
      xs: "center",
      lg: "left",
    },
    margin: 0,
  };

  const imageContainerStyle = {
    flex: 1,
    width: "100%",
    maxWidth: {
      xs: "100%",
      lg: "500px",
    },
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  };

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
          src={aboutUsBannerImage}
          alt="Aggie Coding Club"
          style={bannerImageStyle}
        />
        <Box sx={bannerOverlayStyle} />
        <h1 style={bannerTitleStyle}>About Us</h1>
      </Box>
      <Container maxWidth="lg">
        <Box sx={statsContainerStyle}>
          <Box sx={contentWrapperStyle}>
            <Box sx={descriptionContainerStyle}>
              <p style={descriptionStyle}>
                Aggie Coding Club is the largest computer science organization
                at Texas A&M University, bringing together students passionate
                about software development, technology, and innovation. Our
                community thrives on collaboration, learning, and building
                meaningful projects that make a difference. We are proud to have
                direct backing from the College of Engineering and Computer
                Science departments, which enables us to provide exceptional
                resources and opportunities to our members.
              </p>
            </Box>
            <Box sx={imageContainerStyle}>
              <img
                src={aboutUsImage}
                alt="Aggie Coding Club members at a meeting"
                style={imageStyle}
              />
            </Box>
          </Box>
          <Box sx={statsGridStyle}>
            <Box sx={statCardStyle}>
              <h2 style={statNumberStyle}>3800+</h2>
              <p style={statLabelStyle}>Discord Members</p>
            </Box>
            <Box sx={statCardStyle}>
              <h2 style={statNumberStyle}>10+</h2>
              <p style={statLabelStyle}>Company Partners</p>
            </Box>
            <Box sx={statCardStyle}>
              <h2 style={statNumberStyle}>30+</h2>
              <p style={statLabelStyle}>Events a Year</p>
            </Box>
          </Box>
        </Box>
      </Container>
      <OfficerTeam />
    </>
  );
}

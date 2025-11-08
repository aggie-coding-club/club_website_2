import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";

export default function InstagramGallery() {
  const theme = useTheme();

  const containerStyle = {
    margin: "70px 0",
  };

  const titleStyle = {
    color: theme.palette.text.primary,
    fontSize: "30px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "40px",
  };

  const widgetContainerStyle = {
    width: "100%",
    maxWidth: "935px",
    margin: "0 auto",
    minHeight: "600px",
  };

  const profileLinkStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  };

  const linkButtonStyle = {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "12px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Follow Us on Instagram</h2>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div style={widgetContainerStyle}>
            {/* Instagram Feed Widget - automatically pulls latest posts from @aggiecodingclub */}
            <iframe
              src="https://www.instagram.com/aggiecodingclub/embed"
              title="Instagram Feed"
              style={{
                width: "100%",
                maxWidth: "935px",
                height: "600px",
                border: "none",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </div>
        </Box>
        <div style={profileLinkStyle}>
          <a
            href="https://www.instagram.com/aggiecodingclub/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkButtonStyle,
              backgroundColor: "transparent",
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.palette.primary.main;
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.palette.primary.main;
            }}
          >
            Follow Us on Instagram
          </a>
        </div>
      </Container>
    </div>
  );
}

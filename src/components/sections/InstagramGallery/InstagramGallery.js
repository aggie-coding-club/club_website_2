import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";

export default function InstagramGallery() {
  const theme = useTheme();

  const containerStyle = {
    margin: "70px 0",
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
      <Box
        component="h2"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "30px",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: {
            xs: "20px",
            sm: "30px",
            md: "40px",
          },
        }}
      >
        Follow Us on Instagram
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          paddingLeft: { xs: "10px", sm: "16px", md: "24px" },
          paddingRight: { xs: "10px", sm: "16px", md: "24px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: {
              xs: "0px",
              sm: "10px",
              md: "15px",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "935px",
              margin: "0 auto",
              minHeight: { xs: "400px", sm: "500px", md: "600px" },
              marginBottom: 0,
              paddingBottom: 0,
            }}
          >
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
                display: "block",
                margin: 0,
                padding: 0,
                verticalAlign: "bottom",
              }}
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: {
              xs: "-180px",
              sm: "-100px",
              md: "20px",
            },
            paddingTop: {
              xs: "0px",
              sm: "0px",
              md: "0px",
            },
          }}
        >
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
        </Box>
      </Container>
    </div>
  );
}

import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import SponsorCard from "./SponsorCard";

export default function SponsorCards({ tier, sponsors }) {
  const theme = useTheme();

  const containerStyle = {
    padding: "60px 0",
    marginBottom: tier === "Former Sponsors" ? "0" : "60px",
    backgroundColor: "transparent",
    borderRadius: "0",
    margin: "0",
    position: "relative",
    overflow: "hidden",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "40px",
    color: theme.palette.text.primary,
    letterSpacing: "-0.5px",
  };

  const sponsorContainerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
  };

  const sponsorsFlexBox = {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, 1fr)",
      sm: "repeat(3, 1fr)",
      md: "repeat(4, 1fr)",
      lg: "repeat(5, 1fr)",
    },
    gap: "28px",
    maxWidth: "1400px",
    width: "100%",
  };

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="lg">
        {tier && <h2 style={titleStyle}>{tier}</h2>}
        <div style={sponsorContainerStyle}>
          <Box sx={sponsorsFlexBox}>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.key} name={sponsor.name} />
            ))}
          </Box>
        </div>
      </Container>
    </Box>
  );
}

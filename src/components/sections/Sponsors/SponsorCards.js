import Box from "@mui/material/Box/Box";
import SponsorCard from "./SponsorCard";

export default function SponsorCards({ tier, sponsors }) {
  const containerStyle = {
    padding: "20px 0"

  }
  const sponsorContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const sponsorsFlexBox = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: {
      sm: "80vw",
      md: "50vw",
    },
  };
  return (
    <div style={containerStyle}>
      <h2>{tier}</h2>
      <div style={sponsorContainerStyle}>
        <Box sx={sponsorsFlexBox}>
          {sponsors.map((sponsor) => (
            <SponsorCard name={sponsor.name} />
          ))}
        </Box>
      </div>
    </div>
  );
}

import allSponsors from "../../../static/data/sponsors.json";
import Sponsor from "./Sponsor";
import Box from "@mui/material/Box/Box";

const sponsors = allSponsors.sponsors;

export default function Sponsors() {
  const container = {
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
      md: "50vw"
    }
  };
  return (
    <div>
      <h1>Sponsors</h1>

      <div style={container}>
        <Box sx={sponsorsFlexBox}>
          {sponsors.map((sponsor) => (
            <Sponsor name={sponsor.name} />
          ))}
        </Box>
      </div>
    </div>
  );
}

import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import allSponsors from "../../../static/data/sponsors.json";
import SponsorCards from "./SponsorCards";
import whySponsorImage from "../../../static/images/sponsors/whysponsor.JPG";

const sponsors = allSponsors.sponsors;

export default function Sponsors() {
  const theme = useTheme();

  // Combine all current sponsors into one array
  const allCurrentSponsors = [
    ...(sponsors.gold || []),
    ...(sponsors.silver || []),
    ...(sponsors.bronze || []),
  ];

  const whySponsorContainerStyle = {
    margin: "60px auto",
    maxWidth: "1200px",
    padding: "0 20px",
  };

  const whySponsorContentStyle = {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "40px",
    alignItems: "center",
  };

  const whySponsorImageContainerStyle = {
    flex: 1,
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const whySponsorImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  };

  const whySponsorTextContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const whySponsorTitleStyle = {
    fontSize: {
      xs: "32px",
      md: "40px",
    },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: "20px",
    textAlign: {
      xs: "center",
      lg: "left",
    },
  };

  const whySponsorTextStyle = {
    fontSize: "18px",
    lineHeight: 1.8,
    color: theme.palette.text.primary,
    textAlign: {
      xs: "center",
      lg: "left",
    },
    margin: 0,
  };

  return (
    <div id="sponsors">
      {allCurrentSponsors.length > 0 && (
        <SponsorCards
          tier="We Love Our Sponsors ❤️"
          sponsors={allCurrentSponsors}
        />
      )}

      <Box sx={whySponsorContainerStyle}>
        <Box sx={whySponsorContentStyle}>
          <Box sx={whySponsorImageContainerStyle}>
            <img
              src={whySponsorImage}
              alt="Why Sponsor ACC"
              style={whySponsorImageStyle}
            />
          </Box>
          <Box sx={whySponsorTextContainerStyle}>
            <h2 style={whySponsorTitleStyle}>Why Sponsor?</h2>
            <p style={whySponsorTextStyle}>
              Partnering with Aggie Coding Club gives your company direct access
              to one of the largest and most engaged computer science
              communities at Texas A&M University. Our sponsors benefit from
              increased brand visibility, direct recruitment opportunities, and
              the chance to support the next generation of tech talent. Join us
              in fostering innovation and building connections with passionate
              students who are shaping the future of technology.
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

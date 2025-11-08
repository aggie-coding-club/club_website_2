import { useTheme } from "@emotion/react";
import peopleImage from "../../../static/images/people/people6.jpg";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
import DiscordButton from "../../assets/DiscordButton";
import { Box } from "@mui/material";

export default function HowToJoin() {
  const theme = useTheme();

  const mainContainerStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "60px",
    alignItems: "center",
    marginBottom: "60px",
  };

  const textContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: 1.8,
    color: theme.palette.text.secondary,
    textAlign: {
      xs: "center",
      md: "left",
    },
    margin: 0,
  };

  const highlightStyle = {
    color: theme.palette.primary.main,
    fontWeight: 600,
  };

  const imageContainerStyle = {
    flex: 1,
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "center",
    alignItems: "center",
  };

  const featuresContainerStyle = {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
    },
    gap: "24px",
    marginTop: "40px",
  };

  const featureCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    },
  };

  const featureIconStyle = {
    fontSize: "48px",
    marginBottom: "16px",
  };

  const featureTitleStyle = {
    fontSize: "20px",
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginBottom: "8px",
  };

  const featureDescriptionStyle = {
    fontSize: "16px",
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    margin: 0,
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: {
      xs: "center",
      md: "flex-start",
    },
    marginTop: "16px",
  };

  return (
    <div id="how-to-join">
      <Box sx={mainContainerStyle}>
        <Box sx={contentWrapperStyle}>
          <Box sx={textContainerStyle}>
            <p style={descriptionStyle}>
              Aggie Coding Club is open to all Texas A&M students regardless of
              coding experience or major at any point during the semester. There
              are <span style={highlightStyle}>no dues</span> and{" "}
              <span style={highlightStyle}>no application forms</span>.
            </p>
            <p style={descriptionStyle}>
              Simply start attending our weekly meetings! Follow the link below
              to join our Discord to connect and be informed of our meeting
              times.
            </p>
            <Box sx={buttonContainerStyle}>
              <DiscordButton />
            </Box>
          </Box>
          <Box sx={imageContainerStyle}>
            <BlueOffsetImage
              src={peopleImage}
              alt="people in ACC having fun (presenting)"
              width={369}
              height={246}
            />
          </Box>
        </Box>

        <Box sx={featuresContainerStyle}>
          <Box sx={featureCardStyle}>
            <Box sx={featureIconStyle}>🎓</Box>
            <h3 style={featureTitleStyle}>Open to All</h3>
            <p style={featureDescriptionStyle}>
              No matter your major or experience level, everyone is welcome to
              join and learn.
            </p>
          </Box>
          <Box sx={featureCardStyle}>
            <Box sx={featureIconStyle}>💰</Box>
            <h3 style={featureTitleStyle}>Completely Free</h3>
            <p style={featureDescriptionStyle}>
              No membership dues or fees. Just show up and start learning with
              us.
            </p>
          </Box>
          <Box sx={featureCardStyle}>
            <Box sx={featureIconStyle}>🚀</Box>
            <h3 style={featureTitleStyle}>Join Anytime</h3>
            <p style={featureDescriptionStyle}>
              You can join at any point during the semester. No application
              process required.
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

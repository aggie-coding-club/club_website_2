import { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function SponsorCard({ name }) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  function formatName(name) {
    // Special cases for sponsors with non-standard file names or extensions
    const specialCases = {
      "LPL Financial": "lplfinancial.png",
      "IPT Global": "ipt.png",
      "Northmark Strategies": "northmark.jpeg",
      Arm: "arm.png",
    };

    if (specialCases[name]) {
      return specialCases[name];
    }

    // Default: lowercase, replace spaces with underscores, add .jpg
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
    boxShadow: hover
      ? "0 12px 24px rgba(0, 0, 0, 0.15)"
      : "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: `2px solid ${hover ? theme.palette.primary.main : "#e0e0e0"}`,
    transform: hover ? "translateY(-6px)" : "translateY(0)",
    position: "relative",
    overflow: "hidden",
  };

  const topBorderStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: theme.palette.primary.main,
    transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: hover ? 1 : 0,
  };

  const imageContainerStyle = {
    width: "100%",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    padding: "8px",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: hover ? "scale(1.08)" : "scale(1)",
    filter: hover ? "brightness(1.05)" : "brightness(1)",
  };

  const nameStyle = {
    fontSize: "15px",
    fontWeight: 600,
    color: hover ? theme.palette.primary.main : theme.palette.text.primary,
    textAlign: "center",
    margin: 0,
    lineHeight: 1.5,
    transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <Box
      sx={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={topBorderStyle} />
      <Box sx={imageContainerStyle}>
        <img
          src={require(`../../../static/images/sponsors/${formatName(name)}`)}
          alt={`${name} logo`}
          loading="lazy"
          style={imageStyle}
        />
      </Box>
      <p style={nameStyle}>{name}</p>
    </Box>
  );
}

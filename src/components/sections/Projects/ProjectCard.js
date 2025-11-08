import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Box } from "@mui/material";

/**
 *
 * @param {string} name
 * @param {description} description
 * @param {link} linkAddress link to github repo or website
 * @returns React component with project organized in card
 */
export default function ProjectCard({
  name,
  description,
  linkAddress,
  imgType,
}) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + `.${imgType}`;
  }

  function limitToTwoSentences(text) {
    const sentences = text.split(/(?<=[.!?])\s+/);
    if (sentences.length <= 2) {
      return text;
    }
    return sentences.slice(0, 2).join(" ");
  }

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        margin: "8px 12px",
        minWidth: "300px",
        boxShadow: hover
          ? "0 12px 24px rgba(0, 0, 0, 0.15)"
          : "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: "100%",
          height: "240px",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={require(`../../../static/images/projects/${formatName()}`)}
          alt={"Image of " + name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          height: "300px",
        }}
      >
        <Box
          component="h3"
          sx={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 600,
            color: theme.palette.text.primary,
            lineHeight: 1.4,
            height: "62px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "0px",
          }}
        >
          {name}
        </Box>
        <Box
          component="p"
          sx={{
            margin: 0,
            fontSize: "15px",
            color: theme.palette.text.primary,
            lineHeight: 1.7,
            height: "162px",
            marginBottom: "8px",
          }}
        >
          {limitToTwoSentences(description)}
        </Box>
        <Box
          sx={{
            height: "44px",
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          {linkAddress && (
            <Button
              href={linkAddress}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "8px",
                padding: "10px 24px",
                fontSize: "14px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark || "#2a4f8a",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Learn More →
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

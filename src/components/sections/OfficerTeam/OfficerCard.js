import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { AiFillLinkedin } from "react-icons/ai";

/**
 *
 * @param {string} name - The name of an officer
 * @param {string} major - The major of an officer
 * @param {string} position - The position / role of an officer (eg) Workshops
 * @param {string} term - The years the officer was in office (eg) 2018 - 2020
 * @param {string} description - A short description of an officer
 * @param {string} linkedin - LinkedIn profile URL (optional)
 * @returns {ReactComponentElement[]} renders a singular card with the officer info
 */
export default function OfficerCard({
  name,
  major,
  position,
  term,
  description,
  linkedin,
}) {
  const [hover, setHover] = useState(false);

  const theme = useTheme();

  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseExit() {
    setHover(false);
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "360px",
        margin: "0 auto",
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        willChange: "transform",
        transform: hover ? "translate3d(0, -8px, 0)" : "translate3d(0, 0, 0)",
        boxShadow: hover
          ? "0 12px 24px rgba(0, 0, 0, 0.15)"
          : "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            willChange: "transform",
            transform: hover ? "scale3d(1.05, 1.05, 1)" : "scale3d(1, 1, 1)",
            transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          src={require(`../../../static/images/officers/${formatName()}`)}
          alt={`${name} headshot`}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.95) 100%)`,
            opacity: hover ? 1 : 0,
            transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            flexDirection: "column",
            padding: "16px",
            paddingTop: "20px",
            paddingBottom: "20px",
            boxSizing: "border-box",
            willChange: "opacity",
          }}
        >
          {linkedin && (
            <Box
              component="a"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  backgroundColor: "#0077b5",
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 12px rgba(0, 119, 181, 0.4)",
                  "& svg": {
                    color: "#ffffff",
                  },
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
                "& svg": {
                  transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  color: "#0077b5",
                },
              }}
            >
              <AiFillLinkedin size={22} />
            </Box>
          )}
          <Box
            sx={{
              color: "#000000",
              textAlign: "left",
              width: "100%",
              maxHeight: "100%",
              overflow: "visible",
            }}
          >
            <Box
              component="h3"
              sx={{
                margin: "0 0 4px 0",
                fontSize: "20px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: 1.2,
                textShadow:
                  "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              {name}
            </Box>
            <Box
              component="p"
              sx={{
                margin: "0 0 3px 0",
                fontSize: "14px",
                fontWeight: 600,
                color: theme.palette.primary.main,
                lineHeight: 1.3,
                textShadow:
                  "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              {major}
            </Box>
            <Box
              component="p"
              sx={{
                margin: "0 0 8px 0",
                fontSize: "15px",
                fontWeight: 600,
                color: theme.palette.primary.main,
                lineHeight: 1.3,
                textShadow:
                  "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              {position}
            </Box>
            {term && (
              <Box
                component="p"
                sx={{
                  margin: "0 0 8px 0",
                  fontSize: "12px",
                  color: "#000000",
                  lineHeight: 1.3,
                  opacity: 0.8,
                  textShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2)",
                }}
              >
                {term}
              </Box>
            )}
            {description && (
              <Box
                component="p"
                sx={{
                  margin: "8px 0 0 0",
                  fontSize: "13px",
                  color: "#000000",
                  lineHeight: 1.4,
                  opacity: 0.85,
                  maxHeight: "80px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  textShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.2)",
                }}
              >
                {description}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";

/**
 *
 * @param {string} name - The name of an officer
 * @param {string} major - The major of an officer
 * @param {string} position - The position / role of an officer (eg) Workshops
 * @param {string} term - The years the officer was in office (eg) 2018 - 2020
 * @param {string} description - A short description of an officer
 * @returns {ReactComponentElement[]} renders a singular card with the officer info
 */
export default function OfficerCard({
  name,
  major,
  position,
  term,
  description,
}) {
  const [hover, setHover] = useState(false);

  const theme = useTheme();

  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }

  function handleMouseEnter() {
    setHover(true);
    console.log("enter");
  }

  function handleMouseExit() {
    setHover(false);
    console.log("exit");
  }

  const containerStyle = {
    width: "360px",
    margin: "10px",
    position: "relative",
  };

  const imgStyle = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    objectFit: "cover",
    objectPosition: "center",
  };
  const imageDescriptionContainerStyle = {
    position: "absolute",
    backgroundColor: theme.palette.info.main,
    textAlign: "center",
    width: "360px",
    height: "360px",
    top: 0,
    right: 0,

    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

    opacity: hover ? 0.8 : 0,
    visibility: hover ? "visible" : "hidden",
    transition: "all 0.3s linear",

    display: "flex",
    alignItems: "center",
  };

  const imageDescriptionStyle = {
    margin: "0 10px",
  };

  return (
    <Box
      sx={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <img
        style={imgStyle}
        src={require(`../../../static/images/officers/${formatName()}`)}
        alt={`${name} headshot`}
        width={360}
        height={360}
      />
      <div style={imageDescriptionContainerStyle}>
        <div style={imageDescriptionStyle}>
          <h3>{name}</h3>
          <h3>{major}</h3>
          <p>{position}</p>
          <p>{term}</p>
          <p>{description}</p>
        </div>
      </div>
    </Box>
  );
}

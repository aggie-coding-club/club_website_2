import { useState } from "react";
import { Paper } from "@mui/material";
import { useTheme } from "@emotion/react";

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

  const imageDescriptionStyle = {
    position: "absolute",
    backgroundColor: theme.palette.info.main,
    width: "360px",
    height: "360px",
    top: 0,
    right: 0,

    opacity: hover ? 0.8 : 0,
    visibility: hover ? "visible" : "hidden",
    transition: "opacity 0.4s linear",
  };

  return (
    <Paper
      sx={{ width: 360, margin: "10px", position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <img
        src={require(`../../../static/images/officers/${formatName()}`)}
        alt={`${name} headshot`}
        width={360}
        height={360}
        onClick={() => console.log("click")}
      />
      <div style={imageDescriptionStyle}>
        <h3>{name}</h3>
        <h3>{major}</h3>
        <p>{position}</p>
        <p>{term}</p>
        <p>{description}</p>
      </div>
    </Paper>
  );
}

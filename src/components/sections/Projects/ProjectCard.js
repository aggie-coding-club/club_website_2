import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

/**
 *
 * @param {string} name
 * @param {description} description
 * @param {link} linkAddress link to github repo
 * @returns React component with project organized in card
 */
export default function ProjectCard({ name, description, linkAddress }) {
  const theme = useTheme();

  const containerStyle = {
    backgroundColor: theme.palette.info.main,
    margin: "10px",
    padding: "20px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const linkStyle = {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
    opacity: 1,
    margin: "-8px",
  };
  return (
    <div style={containerStyle}>
      <div>
        <h3>{name}</h3>
        <p> {description}</p>
      </div>
      <div>
        <Button href={linkAddress} sx={linkStyle}>
          Learn more
        </Button>
      </div>
    </div>
  );
}

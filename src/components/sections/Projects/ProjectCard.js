import { Paper, Button } from "@mui/material";

/**
 *
 * @param {string} name
 * @param {description} description
 * @param {link} linkAddress link to github repo
 * @returns React component with project organized in card
 */
export default function ProjectCard({ name, description, linkAddress }) {
  return (
    <Paper sx={{ width: "400px" }}>
      <h3>{name}</h3>
      <p> {description}</p>
      <Button href={linkAddress}>Learn more</Button>
    </Paper>
  );
}

import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

/**
 *
 * @param {string} name
 * @param {description} description
 * @param {link} linkAddress link to github repo
 * @returns React component with project organized in card
 */
export default function ProjectCard({ name, description, linkAddress, imgType }) {
  const theme = useTheme();

  const linkStyle = {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
    opacity: 1,
    margin: "-8px",
  };


  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + `.${imgType}`;
  }

  return (
    <div className="flex flex-col items-center zoom px-6 py-8 rounded-lg bg-[#EEF6FF] gap-4">
      <div>
        <h3>{name}</h3>
        <p> {description}</p>
      </div>
      <div >

        <img 
          src={require(`../../../static/images/projects/${formatName()}`)}
          alt={"Image of " + name}
          className="w-auto h-[200px]"
        />
      </div>
      <div>
        {linkAddress && 
        <Button href={linkAddress} sx={linkStyle}>
          Learn more
        </Button>}
      </div>
    </div>
  );
}

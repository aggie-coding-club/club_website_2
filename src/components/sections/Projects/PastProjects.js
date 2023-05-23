import ProjectCard from "./ProjectCard";
import pastProjectsData from "../../../static/data/pastProjectsData.json";
import { Stack } from "@mui/material";

// TODO: Have a scrolly wheel with the cards
// like image below:
// https://stackoverflow.com/questions/63006538/react-material-ui-how-to-create-horizontal-scroll-cards

export default function PastProjects() {
  const stackDirection = {
    xs: "column",
    sm: "row",
  };

  const stackSpacing = {
    xs: 2,
    sm: 1,
    md: 4,
  };
  return (
    <div>
      <h1>Past Projects</h1>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        {pastProjectsData.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            linkAddress={project.linkAddress}
            key={project.key}
          />
        ))}
      </Stack>
    </div>
  );
}

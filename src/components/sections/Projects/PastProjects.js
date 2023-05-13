import ProjectCard from "./ProjectCard";
import pastProjectsData from "../../../static/data/pastProjectsData.json";

// TODO: Have a scrolly wheel with the cards
// like image below:
// https://stackoverflow.com/questions/63006538/react-material-ui-how-to-create-horizontal-scroll-cards

export default function PastProjects() {
  const flexBox = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <h1>Past Projects</h1>
      <div style={flexBox}>
        {pastProjectsData.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            linkAddress={project.linkAddress}
            key={project.key}
          />
        ))}
      </div>
    </div>
  );
}

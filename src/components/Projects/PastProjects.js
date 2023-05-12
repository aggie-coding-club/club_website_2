import ProjectCard from "./ProjectCard";

export default function PastProjects() {
  const flexBox = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <h1>Past Projects</h1>
      <div style={flexBox}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

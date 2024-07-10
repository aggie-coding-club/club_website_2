import ProjectCard from "./ProjectCard";
import pastProjectsData from "../../../static/data/pastProjectsData.json";


export default function PastProjects() {

  return (
    <div>
      <h1>Past Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-8">
        {pastProjectsData.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            linkAddress={project.linkAddress}
            imgType={project.imgType}
            key={project.key}
          />
        ))}
      </div>
    </div>
  );
}

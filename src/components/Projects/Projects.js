import PastProjects from "./PastProjects";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <div>
          <h3>Build something cool together</h3>
          <p>
            Aggie Coding Club offers learning and progress oriented projects to
            students to work on in teams throughout the semester. Students are
            able to apply skills they have learned in the classroom and gain new
            skills while developing new technologies. ACC project’s welcomes all
            level of experience to join.
          </p>
          <p>
            Applications to join a project open at the start of each semester.
          </p>
        </div>
        <div>
          <h3>Or start something awesome</h3>
          <p>
            Do you have a great project idea ? Are you interested in learning
            more about project management? You might want to consider becoming a
            project manager.
          </p>
          <p>
            Project manager applications open at the start of each semester.
            Contact project officers for any questions regarding projects.
          </p>
        </div>
      </div>
      <PastProjects />
    </div>
  );
}

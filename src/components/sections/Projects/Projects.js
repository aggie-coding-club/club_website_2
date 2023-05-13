import peopleImage2 from "../../../static/images/people/people2.jpg";
import peopleImage3 from "../../../static/images/people/people3.png";

import PastProjects from "./PastProjects";

export default function Projects() {
  const containerStyle = {
    display: "flex",
    direction: "row",
  };
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <div style={containerStyle}>
          <div>
            <h3>Build something cool together</h3>
            <p>
              Aggie Coding Club offers learning and progress oriented projects
              to students to work on in teams throughout the semester. Students
              are able to apply skills they have learned in the classroom and
              gain new skills while developing new technologies. ACC project’s
              welcomes all level of experience to join.
            </p>
            <p>
              Applications to join a project open at the start of each semester.
            </p>
          </div>
          <div>
            <img src={peopleImage2} alt="more acc people having a blast" />
          </div>
        </div>
        <div style={containerStyle}>
          <div>
            <img src={peopleImage3} alt="even more acc people having a blast" />
          </div>
          <div>
            <h3>Or start something awesome</h3>
            <p>
              Do you have a great project idea ? Are you interested in learning
              more about project management? You might want to consider becoming
              a project manager.
            </p>
            <p>
              Project manager applications open at the start of each semester.
              Contact project officers for any questions regarding projects.
            </p>
          </div>
        </div>
      </div>
      <PastProjects />
    </div>
  );
}

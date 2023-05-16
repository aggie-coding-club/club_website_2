import { Container } from "@mui/system";
import peopleImage2 from "../../../static/images/people/people2.jpg";
import peopleImage3 from "../../../static/images/people/people3.png";

import PastProjects from "./PastProjects";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
import { useTheme } from "@emotion/react";

export default function Projects() {
  const theme = useTheme();

  const containerStyle = {
    display: "flex",
    direction: "row",
    justifyContent: "center",
  };

  const descriptionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: theme.breakpoints.values.sm,
  };

  const imageContainerStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div id="projects">
      <h1>Projects</h1>
      <Container maxWidth="md">
        <div style={containerStyle}>
          <div style={descriptionContainerStyle}>
            <div>
              <h3>Build something cool together</h3>
              <p>
                Aggie Coding Club offers learning and progress oriented projects
                to students to work on in teams throughout the semester.
                Students are able to apply skills they have learned in the
                classroom and gain new skills while developing new technologies.
                ACC project’s welcomes all level of experience to join.
              </p>
              <p>
                Applications to join a project open at the start of each
                semester.
              </p>
            </div>
          </div>
          <div style={imageContainerStyle}>
            <BlueOffsetImage
              src={peopleImage2}
              alt="more acc people having a blast"
              width={277}
              height={369}
            />
          </div>
        </div>
        <div style={containerStyle}>
          <div>
            <BlueOffsetImage
              src={peopleImage3}
              alt="acc members showing off their gingerbread house"
              width={276}
              height={369}
            />
          </div>
          <Container maxWidth="sm" sx={descriptionContainerStyle}>
            <div>
              <h3>Or start something awesome</h3>
              <p>
                Do you have a great project idea ? Are you interested in
                learning more about project management? You might want to
                consider becoming a project manager.
              </p>
              <p>
                Project manager applications open at the start of each semester.
                Contact project officers for any questions regarding projects.
              </p>
            </div>
          </Container>
        </div>
      </Container>
      <PastProjects />
    </div>
  );
}

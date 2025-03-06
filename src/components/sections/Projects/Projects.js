import { Container } from "@mui/system";
import peopleImage2 from "../../../static/images/people/people4.jpg";
import peopleImage3 from "../../../static/images/people/people7.jpg";

import PastProjects from "./PastProjects";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

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
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
  };

  const descriptionContainerStyle1 = {
    paddingRight: {
      xs: "0",
      sm: "0",
      md: "30px",
      lg: "30px",
    },
    marginBottom: {
      xs: "2rem",
      sm: "2rem",
      md: "0",
      lg: "0",
    },
    ...descriptionContainerStyle,
  };

  const descriptionContainerStyle2 = {
    paddingLeft: {
      xs: "0",
      sm: "0",
      md: "30px",
      lg: "30px",
    },
    ...descriptionContainerStyle,
  };

  return (
    <div id="projects">
      <h1>Projects</h1>
      <Container maxWidth="md">
        <div style={containerStyle}>
          <Box sx={descriptionContainerStyle1}>
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
          </Box>
          <div>
            <BlueOffsetImage
              src={peopleImage2}
              alt="more acc people having a blast"
              width={367}
              height={277}
            />
          </div>
        </div>
        <div style={containerStyle}>
          <div>
            <BlueOffsetImage
              src={peopleImage3}
              alt="acc members chatting"
              width={277}
              height={277}
            />
          </div>
          <Box sx={descriptionContainerStyle2}>
            <div>
              <h3>Or start something awesome</h3>
              <p>
                Do you have a great project idea? Are you interested in
                learning more about project management? You might want to
                consider becoming an ACC project manager.
              </p>
              <p>
                Project manager applications open at the start of each semester.
                Contact project officers for any questions regarding projects.
              </p>
            </div>
          </Box>
        </div>
      </Container>
      <PastProjects />
    </div>
  );
}

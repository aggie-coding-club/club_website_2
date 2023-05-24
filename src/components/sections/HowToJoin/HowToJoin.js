import { Container } from "@mui/system";
import peopleImage from "../../../static/images/people/people1.png";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
import DiscordButton from "../../assets/DiscordButton";
import { Box } from "@mui/material";

export default function HowToJoin() {
  const containerStyle = {
    display: "flex",
    direction: "row",
    justifyContent: "center",
  };

  const descriptionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const descriptionStyle = {
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
  };

  const imageContainerStyle = {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
    },
    flexGrow: 1,
    justifyContent: "center",
  };
  return (
    <div id="how-to-join">
      <h1>How To Join</h1>
      <Container maxWidth="md">
        <div style={containerStyle}>
          <Container maxWidth="sm" sx={descriptionContainerStyle}>
            <Box sx={descriptionStyle}>
              <p>
                Aggie Coding Club is open to all Texas A&M students regardless
                of coding experience or major at any point during the semester.
                There are <strong>no dues</strong> and{" "}
                <strong>no application forms</strong>.
              </p>
              <p>
                Simply start attending our weekly meetings! Follow the link
                below to join our Discord to connect and be informed of our
                meeting times.
              </p>
              <DiscordButton />
            </Box>
          </Container>
          <Box sx={imageContainerStyle}>
            <BlueOffsetImage src={peopleImage} alt="people in ACC having fun" />
          </Box>
        </div>
      </Container>
    </div>
  );
}

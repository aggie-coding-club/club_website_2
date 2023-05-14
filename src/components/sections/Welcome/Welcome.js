import DiscordButton from "../../assets/DiscordButton";
import logo from "../../../static/icons/computer.png";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export default function Welcome() {
  const theme = useTheme();

  const containerStyle = {
    backgroundColor: theme.palette.info.main,
    borderRadius: "25px",
    padding: "60px 0",

    display: "flex",
    direction: "row",
    justifyContent: "center",
  };

  const contentStyle = {
    margin: "0 100px",
    display: "flex",
    direction: "row",
    justifyContent: "center",
  }

  const imageContainerStyle = {
    width: "250px",
  };

  const headingStyle = {
    textAlign: "left",
    margin: 0
  };

  const headingEmphasisStyle = {
    color: theme.palette.text.secondary,
    marginTop: "-1rem",
    ...headingStyle,

  };

  const textStyle = {
    marginRight: "100px"
  }

  return (
    <Box sx={containerStyle}>
      <div style={contentStyle}>
        <div style={textStyle}>
          <div>
            <h1 style={headingStyle}>Welcome to the</h1>
            <h1 style={headingEmphasisStyle}>Aggie Coding Club!</h1>
          </div>

          <p>
            Aggie Coding Club provides the students of Texas A&M University that
            are interested in software development the opportunity to explore
            their careers and passions through projects, meetings, and
            workshops. The club also provides a community where members can
            benefit from valuable networking opportunities and learn from each
            other.
          </p>
          <DiscordButton />
        </div>
        <div style={imageContainerStyle}>
          <img src={logo} alt="ACC Logo" />
        </div>
      </div>
    </Box>
  );
}

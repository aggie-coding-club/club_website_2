import DiscordButton from "../../assets/DiscordButton";
import logo from "../../../static/icons/computer.png";
import { useTheme } from "@emotion/react";

export default function Welcome() {
  const theme = useTheme();

  const containerStyle = {
    backgroundColor: theme.palette.info.main,
    display: "flex",
    direction: "row",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <div>
        <div>
          <h1>Welcome to the </h1>
          <h1>Aggie Coding Club</h1>
        </div>
        <p>
          Aggie Coding Club provides the students of Texas A&M University that
          are interested in software development the opportunity to explore
          their careers and passions through projects, meetings, and workshops.
          The club also provides a community where members can benefit from
          valuable networking opportunities and learn from each other.
        </p>
        <DiscordButton />
      </div>
      <img src={logo} alt="ACC Logo" width="400px" />
    </div>
  );
}

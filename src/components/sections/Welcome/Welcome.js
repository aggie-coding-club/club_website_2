import { Button } from "@mui/material";
import DiscordButton from "../../assets/DiscordButton";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to the Aggie Coding Club</h1>
      <p>
        Aggie Coding Club provides the students of Texas A&M University that are
        interested in software development the opportunity to explore their
        careers and passions through projects, meetings, and workshops. The club
        also provides a community where members can benefit from valuable
        networking opportunities and learn from each other.
      </p>
      <DiscordButton />
    </div>
  );
}

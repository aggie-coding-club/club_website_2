import { Button } from "@mui/material";
import OfficerCards from "./OfficerCards";
const officers = [
  {
    name: "Brady",
    major: "hehe",
  },
  {
    name: "Sofia",
    major: "hehe",
  },
  {
    name: "Casey",
    major: "hehe",
  },
];
const formerOfficers = officers; // FIXME

export default function OfficerTeam() {
  return (
    <div>
      <div>
        <h1>Officer Team</h1>
        <OfficerCards officers={officers} />
      </div>
      <Button variant="contained">Former Officers</Button>
      <div>
        <h1>Former Officers</h1>
        <OfficerCards officers={formerOfficers} />
      </div>
    </div>
  );
}

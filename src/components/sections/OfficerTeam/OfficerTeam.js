import { Button } from "@mui/material";
import OfficerCards from "./OfficerCards";

import allOfficers from "../../../static/data/officers.json";

const officers = allOfficers.officers;
const formerOfficers = allOfficers.former;

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

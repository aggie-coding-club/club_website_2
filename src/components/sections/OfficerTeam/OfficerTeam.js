import { useState } from "react";
import OfficerCards from "./OfficerCards";

import allOfficers from "../../../static/data/officers.json";
import { SquareButton } from "../../assets/SquareButton";

const officers = allOfficers.officers;
const formerOfficers = allOfficers.former;

export default function OfficerTeam() {
  // keeps track of button state to know whether to display officers or not
  const [displayFormerOfficers, setDisplayFormerOfficers] = useState(false);

  function handleClick() {
    setDisplayFormerOfficers(!displayFormerOfficers);
  }
  return (
    <div>
      <div>
        <h1>Officer Team</h1>
        <OfficerCards officers={officers} />
      </div>
      <SquareButton variant="contained" onClick={handleClick}>
        Former Officers
      </SquareButton>

      {displayFormerOfficers && (
        <div>
          <h1>Former Officers</h1>
          <OfficerCards officers={formerOfficers} />
        </div>
      )}
    </div>
  );
}

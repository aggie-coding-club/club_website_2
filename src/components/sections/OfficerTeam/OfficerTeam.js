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

  const squareButtonStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  };
  return (
    <div id="officer-team">
      <div>
        <h1>Officer Team</h1>
        <OfficerCards officers={officers} />
      </div>
      <div style={squareButtonStyle}>
        <SquareButton variant="contained" onClick={handleClick}>
          Former Officers
        </SquareButton>
      </div>

      {displayFormerOfficers && (
        <div>
          <h1>Former Officers</h1>
          <OfficerCards officers={formerOfficers} />
        </div>
      )}
    </div>
  );
}

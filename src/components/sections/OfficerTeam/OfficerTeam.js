import { useState, useRef } from "react";
import OfficerCards from "./OfficerCards";
import HeartsEasterEgg from "../../common/HeartsEasterEgg";
import ComboUnlockedDialog from "../../common/ComboUnlockedDialog";

import allOfficers from "../../../static/data/officers.json";
import { SquareButton } from "../../assets/SquareButton";

const officers = allOfficers.officers;
const formerOfficers = allOfficers.former;

export default function OfficerTeam() {
  // keeps track of button state to know whether to display officers or not
  const [displayFormerOfficers, setDisplayFormerOfficers] = useState(false);
  const hoveredOfficersRef = useRef(new Set());
  const [comboUnlocked, setComboUnlocked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const dialogShownRef = useRef(false);

  function handleClick() {
    setDisplayFormerOfficers(!displayFormerOfficers);
  }

  function handleOfficerHover(name) {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("andrew") || nameLower.includes("christion")) {
      const newSet = new Set(hoveredOfficersRef.current);
      newSet.add(nameLower.includes("andrew") ? "andrew" : "christion");
      hoveredOfficersRef.current = newSet;

      // Check if both are hovered and dialog hasn't been shown yet
      if (
        newSet.has("andrew") &&
        newSet.has("christion") &&
        !comboUnlocked &&
        !dialogShownRef.current
      ) {
        setComboUnlocked(true);
        setShowDialog(true);
        dialogShownRef.current = true;
      }
    }
  }

  function handleDialogClose() {
    setShowDialog(false);
    setComboUnlocked(false);
  }

  const squareButtonStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  };
  return (
    <div id="officer-team">
      <HeartsEasterEgg active={comboUnlocked && showDialog} />
      <ComboUnlockedDialog open={showDialog} onClose={handleDialogClose} />
      <div>
        <OfficerCards officers={officers} onOfficerHover={handleOfficerHover} />
      </div>
      <div style={squareButtonStyle}>
        <SquareButton variant="contained" onClick={handleClick}>
          Former Team Members
        </SquareButton>
      </div>

      {displayFormerOfficers && (
        <div>
          <h1>Former Team Members</h1>
          <OfficerCards
            officers={formerOfficers}
            onOfficerHover={handleOfficerHover}
          />
        </div>
      )}
    </div>
  );
}

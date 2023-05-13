import { Paper } from "@mui/material";

/**
 *
 * @param {string} name - The name of an officer
 * @param {string} major - The major of an officer
 * @param {string} position - The position / role of an officer (eg) Workshops
 * @param {string} term - The years the officer was in office (eg) 2018 - 2020
 * @param {string} description - A short description of an officer
 * @returns {ReactComponentElement[]} renders a singular card with the officer info
 */
export default function OfficerCard({
  name,
  major,
  position,
  term,
  description,
}) {
  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }
  return (
    <Paper sx={{ width: 360 }}>
      <h3>{name}</h3>
      <h3>{major}</h3>
      <p>{position}</p>
      <p>{term}</p>
      <p>{description}</p>
      <img
        src={require(`../../../static/images/officers/${formatName()}`)}
        alt={`${name} headshot`}
        width={360}
        height={360}
      />
    </Paper>
  );
}

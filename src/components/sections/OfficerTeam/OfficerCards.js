import { Box } from "@mui/material";
import OfficerCard from "./OfficerCard";
/**
 *
 * data: {
 *  string name,
 *  string major,
 *  string class year
 *  string description (optional)
 *
 * }
 */

/**
 *
 * @param {Object[]} officers
 * @param {string} officers[].name - The name of an officer
 * @param {string} officer[].major - The major of an officer
 * @param {string} officer[].position - The position / role of an officer (eg) Workshops
 * @param {string} officer[].term - The years the officer was in office (eg) 2018 - 2020
 * @param {string} officer[].description - A short description of an officer
 * @returns {ReactComponentElement[]} renders the array of officers into cards
 */
export default function OfficerCards({ officers, onOfficerHover }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {officers.map((officer) => (
        <OfficerCard
          name={officer.name}
          major={officer.major}
          position={officer.position}
          term={officer.term}
          description={officer.description}
          linkedin={officer.linkedin}
          key={officer.name}
          onHover={onOfficerHover}
        />
      ))}
    </Box>
  );
}

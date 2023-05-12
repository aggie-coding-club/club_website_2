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
export default function OfficerCards({ officers }) {
  return officers.map((officer) => (
    <OfficerCard name={officer.name} major={officer.major} />
  ));
}

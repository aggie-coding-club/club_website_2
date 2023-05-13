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
export default function OfficerCards({ officers }) {
  return officers.map((officer) => (
    <OfficerCard
      name={officer.name}
      major={officer.major}
      position={officer.position}
      term={officer.term}
      description={officer.description}
    />
  ));
}

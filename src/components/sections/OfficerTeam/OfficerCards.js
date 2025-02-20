import OfficerCard from "./OfficerCard";
/**
 *
 * data: {
 *  string name,
 *  string major,
 *  string class year
 *  string description (optional)
 *  string linkedinurl (optional)
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
 * @param {string} officer[].linkedinurl - The LinkedIn profile URL of an officer (optional)
 * @param {string} officer[].githuburl - The GitHub profile URL of an officer (optional)
 * @param {string} officer[].portfoliourl - The portfolio website URL of an officer (optional)
 * @returns {ReactComponentElement[]} renders the array of officers into cards
 */
export default function OfficerCards({ officers }) {
  const containerStyle = {
    display: "flex",
    direction: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      {officers.map((officer) => (
        <OfficerCard
          name={officer.name}
          major={officer.major}
          position={officer.position}
          term={officer.term}
          description={officer.description}
          linkedinurl={officer.linkedinurl}
          githuburl={officer.githuburl}
          portfoliourl={officer.portfoliourl}
          key={officer.name}
        />
      ))}
    </div>
  );
}
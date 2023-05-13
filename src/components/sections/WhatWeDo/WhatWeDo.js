import peopleImage from "../../../static/images/people/officers-natural-habitat.jpg";
import Characterstic from "./Characterstic";

const characterstics = [
  {
    header: "Workshops",
    description: "learn something new every week",
    key: 1,
  },
  {
    header: "Projects",
    description: "create a coding project with other ACC members",
    key: 2,
  },
  {
    header: "Socials",
    description: "get to know other coders through events",
    key: 3,
  },
  {
    header: "Company Talks",
    description: "network and learn about companies each week",
    key: 4,
  },
];

export default function WhatWeDo() {
  const containerStyle = {
    display: "flex",
    direction: "row",
  };
  return (
    <div>
      <h1>What We Do</h1>
      <div style={containerStyle}>
        <div>
          <img src={peopleImage} alt="officers in their natural habitat" />
        </div>
        <div>
          {characterstics.map((ch) => (
            <Characterstic
              key={ch.key}
              num={ch.key}
              header={ch.header}
              description={ch.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

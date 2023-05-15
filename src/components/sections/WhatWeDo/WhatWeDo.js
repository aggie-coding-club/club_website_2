import peopleImage from "../../../static/images/people/people0.jpg";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
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
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
  };

  const imageContainerStyle = {
    // backgroundColor: "purple",
    flexGrow: 1,
  };

  const charactersticStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <div>
      <h1>What We Do</h1>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <BlueOffsetImage
            src={peopleImage}
            alt="officers in their wild habitats"
          />
        </div>
        <div style={charactersticStyle}>
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

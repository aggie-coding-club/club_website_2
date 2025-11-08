import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import peopleImage from "../../../static/images/people/people5.jpg";
import BlueOffsetImage from "../../assets/BlueOffsetImage";
import Characterstic from "./Characterstic";

import { Container } from "@mui/system";

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
  const theme = useTheme();
  const navigate = useNavigate();

  const handleEventsClick = (e) => {
    e.preventDefault();
    navigate("/events");
    window.scrollTo(0, 0);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const imageContainerStyle = {
    display: {
      xs: "none",
      sm: "none",
      md: "block",
    },
    flexGrow: 1,
    justifyContent: "center",
  };

  const charactersticStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };

  const buttonStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "50px",
    padding: "10px 40px",
    textDecoration: "none",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: 500,
    transition: "all 0.3s ease",
    display: "inline-block",
    whiteSpace: "nowrap",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "16px",
  };

  return (
    <div>
      <h1>What We Do</h1>
      <Container maxWidth="md">
        <div style={containerStyle}>
          <Box sx={imageContainerStyle}>
            <BlueOffsetImage
              src={peopleImage}
              alt="officers in their wild habitats"
              width={277}
              height={369}
            />
          </Box>
          <div style={charactersticStyle}>
            {characterstics.map((ch) => (
              <Characterstic
                key={ch.key}
                num={ch.key}
                header={ch.header}
                description={ch.description}
              />
            ))}
            <Box sx={buttonContainerStyle}>
              <a
                href="/events"
                onClick={handleEventsClick}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    theme.palette.primary.dark || "#2a4f8a";
                  e.target.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme.palette.primary.main;
                  e.target.style.opacity = "1";
                }}
              >
                Learn More About Our Events
              </a>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}

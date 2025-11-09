import DiscordButton from "../../assets/DiscordButton";
import logo from "../../../static/icons/computer.png";
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Socials from "../../assets/Socials";

export default function Welcome() {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const containerStyle = {
    backgroundColor: theme.palette.info.main,
    borderRadius: "25px",
    padding: "60px 0",
    display: "flex",
    direction: "row",
    justifyContent: "center",
    margin: "0 auto",
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
  };

  const imageContainerStyle = {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    alignItems: "center",
  };

  const headingStyle = {
    textAlign: isLg ? "left" : "center",
    margin: 0,
    fontSize: {
      xs: "42px",
      sm: "48px",
      md: "52px",
      lg: "55px",
    },
    lineHeight: {
      xs: "1.2",
      sm: "1.2",
      md: "1.2",
      lg: "1.2",
    },
  };

  const headingEmphasisStyle = {
    color: theme.palette.text.secondary,
    marginTop: {
      xs: "-0.5rem",
      sm: "-0.75rem",
      md: "-0.875rem",
      lg: "-1rem",
    },
    ...headingStyle,
  };

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          width: "95%",
          maxWidth: "75%",
          margin: "0 auto",
          padding: "0 20px",
          "@media (min-width: 640px)": {
            width: "75%",
          },
        }}
      >
        <div
          className={`flex flex-row justify-center gap-8 sm:px-20 px-4 ${
            isLg ? "text-left" : "text-center"
          }`}
        >
          <div className="flex flex-col gap-6">
            <div>
              <Box component="h1" sx={headingStyle}>
                Welcome to{" "}
              </Box>
              <Box component="h1" sx={headingEmphasisStyle}>
                Aggie Coding Club!
              </Box>
            </div>

            <p className="flex">
              Aggie Coding Club provides the students of Texas A&M University
              that are interested in software development the opportunity to
              explore their careers and passions through projects, meetings, and
              workshops. The club also provides a community where members can
              benefit from valuable networking opportunities and learn from each
              other.
            </p>
            <div className="flex sm:flex-row flex-col gap-10 items-center sm:justify-between">
              <DiscordButton />
              <Socials size={40} />
            </div>
          </div>
          <Box sx={imageContainerStyle}>
            <img src={logo} alt="ACC Logo" />
          </Box>
        </div>
      </Box>
    </Box>
  );
}

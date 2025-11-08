import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import DiscordButton from "../../assets/DiscordButton";

export default function Schedule() {
  const theme = useTheme();

  const containerStyle = {
    margin: "70px 0",
    padding: "60px 0",
  };

  const titleStyle = {
    color: theme.palette.text.primary,
    fontSize: "36px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "50px",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "40px",
    alignItems: "center",
    justifyContent: "center",
  };

  const infoCardStyle = {
    flex: 1,
    backgroundColor: theme.palette.info.main || "#EEF6FF",
    borderRadius: "16px",
    padding: "32px",
    minWidth: {
      xs: "100%",
      md: "300px",
    },
    maxWidth: {
      xs: "100%",
      md: "400px",
    },
    textAlign: "center",
  };

  const scheduleTitleStyle = {
    color: theme.palette.primary.main,
    fontSize: "24px",
    fontWeight: 600,
    margin: "0 0 16px 0",
    textAlign: "center",
  };

  const scheduleTextStyle = {
    color: theme.palette.text.primary,
    fontSize: "16px",
    lineHeight: 1.6,
    margin: "8px 0",
    textAlign: "center",
  };

  const discordNoteStyle = {
    color: theme.palette.text.secondary,
    fontSize: "14px",
    lineHeight: 1.6,
    margin: "20px 0 16px 0",
    fontStyle: "italic",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  };

  const mapContainerStyle = {
    flex: 1,
    minWidth: {
      xs: "100%",
      md: "400px",
    },
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const mapStyle = {
    width: "100%",
    height: "400px",
    border: 0,
  };

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="lg">
        <h1 style={titleStyle}>Schedule & Location</h1>
        <Box sx={contentContainerStyle}>
          <Box sx={infoCardStyle}>
            <h2 style={scheduleTitleStyle}>Meeting Times</h2>
            <p style={scheduleTextStyle}>
              <strong>Day:</strong> Mondays
            </p>
            <p style={scheduleTextStyle}>
              <strong>Time:</strong> 7:00 PM - 9:00 PM
            </p>
            <p style={scheduleTextStyle}>
              <strong>Location:</strong> Room 118
            </p>
            <p style={scheduleTextStyle}>
              <strong>Building:</strong> L.F. Peterson Building
            </p>
            <p style={scheduleTextStyle}>
              <strong>Address:</strong> 435 Nagle St, College Station, TX 77843
            </p>
            <p style={discordNoteStyle}>
              Check Discord for up-to-date meeting info
            </p>
            <Box sx={buttonContainerStyle}>
              <DiscordButton />
            </Box>
          </Box>
          <Box sx={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps?q=L.F.+Peterson+Building,+435+Nagle+St,+College+Station,+TX+77843&output=embed"
              style={mapStyle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L.F. Peterson Building Location"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

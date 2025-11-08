import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export default function PageBanner({ title }) {
  const theme = useTheme();

  const bannerStyle = {
    backgroundColor: theme.palette.info.main,
    width: "100vw",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "60px",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
  };

  const titleStyle = {
    color: theme.palette.text.primary,
    fontSize: "64px",
    fontWeight: 600,
    textAlign: "center",
    margin: 0,
  };

  return (
    <Box sx={bannerStyle}>
      <h1 style={titleStyle}>{title}</h1>
    </Box>
  );
}

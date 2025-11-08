import { useTheme } from "@emotion/react";

export default function DiscordButton() {
  const theme = useTheme();

  const discordButtonStyle = {
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
    <a
      href="https://discord.gg/dX8nnXPpra"
      target="_blank"
      rel="noopener noreferrer"
      style={discordButtonStyle}
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
      Join Discord
    </a>
  );
}

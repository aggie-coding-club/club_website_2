import { useTheme } from "@emotion/react";

/**
 *
 * @param {number} num which number should show up on the side
 * @param {string} header The Header Characterstic (Workshop, Projects, etc...)
 * @param {string} description The description of the characterstic
 * @returns {ReactElement} eg) a formatted text such as "1. Workshops - learn something new:
 */
export default function Characterstic({ num, header, description }) {
  const theme = useTheme();

  const badgeSize = "75px";

  const containerStyle = {
    display: "flex",
    direction: "row",
  };
  const numberContainerStyle = {
    backgroundColor: theme.palette.info.main,
    height: badgeSize,
    width: badgeSize,
    borderRadius: "50%",
  };

  const numberStyle = {
    textAlign: "center",
    lineHeight: badgeSize,
    color: theme.palette.primary.main,
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={numberContainerStyle}>
        <div style={numberStyle}>0{num}</div>
      </div>
      <div>
        <h4>{header}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

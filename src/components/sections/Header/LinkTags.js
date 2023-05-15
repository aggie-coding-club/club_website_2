import { useTheme } from "@emotion/react";

/**
 *
 * @param {Object[]} linkData - str displayed on header
 * @param {string} linkData[].name - str displayed on header
 * @param {string} linkData[].link - where does the link go to
 * @returns
 */
export default function LinkTags({ linkData }) {
  const theme = useTheme();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const linkStyle = {
    transition: "all 1s ease-out",
    textDecoration: "none",
    color: theme.palette.text.info,
    margin: "0 15px",
  };

  return (
    <div style={containerStyle}>
      {linkData.map((aLink) => (
        <a style={linkStyle} href={aLink.link}>
          {aLink.name}
        </a>
      ))}
    </div>
  );
}

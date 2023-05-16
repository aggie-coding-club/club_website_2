import { useTheme } from "@emotion/react";

/**
 *
 * @param {string} src - image path source to display
 * @param {string} alt - description of image for screen readers
 * @param {number} [width=300] - width of blue square (same as image width)
 * @param {number} [height=400] - height of blue square (same as image height)
 */
export default function BlueOffsetImage({ src, alt, width, height }) {
  const theme = useTheme();

  const containerStyle = {
    position: "relative",
    zIndex: 2,
  };

  const blueBoxStyle = {
    position: "absolute",
    zIndex: -1,
    top: 30,
    left: 30,
    width: width ? width : 300,
    height: height ? height : 400,
    backgroundColor: theme.palette.info.main,
  };
  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} />
      <div style={blueBoxStyle}></div>
    </div>
  );
}

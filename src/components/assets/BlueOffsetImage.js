import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

/**
 *
 * @param {string} src - image path source to display
 * @param {string} alt - description of image for screen readers
 * @param {number} [width=300] - width of blue square (same as image width)
 * @param {number} [height=400] - height of blue square (same as image height)
 */
export default function BlueOffsetImage({ src, alt, width, height }) {
  const theme = useTheme();
  const w = width ? width : 300;
  const h = height ? height : 400;

  const boxStyle = {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
    },
  };

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    marginRight: 30,
  };

  const blueBoxStyle = {
    position: "absolute",
    zIndex: -1,
    top: 30,
    left: 30,
    width: w,
    height: h,
    backgroundColor: theme.palette.info.main,
  };
  return (
    <Box sx={boxStyle}>
      <div style={containerStyle}>
        <img src={src} alt={alt} width={width} height={height} />
        <div style={blueBoxStyle}></div>
      </div>
    </Box>
  );
}

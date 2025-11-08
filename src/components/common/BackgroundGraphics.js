import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function BackgroundGraphics() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Large gradient orbs */}
      <Box
        sx={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}12 0%, ${theme.palette.primary.main}05 40%, transparent 70%)`,
          top: "-250px",
          right: "-250px",
          filter: "blur(60px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}04 40%, transparent 70%)`,
          bottom: "-200px",
          left: "-200px",
          filter: "blur(60px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 60%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(50px)",
        }}
      />

      {/* Hexagon pattern */}
      <Box
        sx={{
          position: "absolute",
          width: "180px",
          height: "180px",
          top: "15%",
          right: "8%",
          background: `repeating-linear-gradient(
            60deg,
            transparent,
            transparent 30px,
            ${theme.palette.primary.main}08 30px,
            ${theme.palette.primary.main}08 60px
          )`,
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          bottom: "25%",
          left: "12%",
          background: `repeating-linear-gradient(
            60deg,
            transparent,
            transparent 20px,
            ${theme.palette.primary.main}06 20px,
            ${theme.palette.primary.main}06 40px
          )`,
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Abstract geometric shapes */}
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          border: `3px solid ${theme.palette.primary.main}15`,
          borderRadius: "40px",
          top: "25%",
          right: "15%",
          transform: "rotate(45deg)",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "150px",
            height: "150px",
            border: `2px solid ${theme.palette.primary.main}12`,
            borderRadius: "25px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-45deg)",
          },
        }}
      />

      {/* Diamond shapes */}
      <Box
        sx={{
          position: "absolute",
          width: "100px",
          height: "100px",
          background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.main}05)`,
          top: "10%",
          left: "8%",
          transform: "rotate(45deg)",
          borderRadius: "15px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "80px",
          height: "80px",
          background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.primary.main}03)`,
          bottom: "20%",
          right: "20%",
          transform: "rotate(45deg)",
          borderRadius: "12px",
        }}
      />

      {/* Curved lines / arcs */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          top: "35%",
          left: "5%",
          border: `4px solid transparent`,
          borderTop: `4px solid ${theme.palette.primary.main}12`,
          borderRight: `4px solid ${theme.palette.primary.main}08`,
          borderRadius: "50%",
          transform: "rotate(-45deg)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          bottom: "35%",
          right: "10%",
          border: `3px solid transparent`,
          borderBottom: `3px solid ${theme.palette.primary.main}10`,
          borderLeft: `3px solid ${theme.palette.primary.main}06`,
          borderRadius: "50%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Dotted pattern circles */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          top: "60%",
          left: "20%",
          border: `2px dashed ${theme.palette.primary.main}12`,
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          top: "5%",
          right: "25%",
          border: `2px dashed ${theme.palette.primary.main}10`,
          borderRadius: "50%",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(${theme.palette.primary.main}04 1px, transparent 1px),
            linear-gradient(90deg, ${theme.palette.primary.main}04 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.4,
        }}
      />
    </Box>
  );
}

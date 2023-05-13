import { Button, styled } from "@mui/material";

export const SquareButton = styled(Button)(({ theme }) => ({
  padding: "10px 50px",
  borderRadius: 0,
}));

// export default function SquareButton({ children }) {
//   const buttonStyle = {
//     padding: "10px 50px",
//     borderRadius: 0,
//   };
//   return (
//     <Button sx={buttonStyle} variant="contained">
//       {children}
//     </Button>
//   );
// }

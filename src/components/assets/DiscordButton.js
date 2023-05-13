import { Button, styled } from "@mui/material";

const SquareButton = styled(Button)(({ theme }) => ({
  padding: "10px 50px",
  borderRadius: 0,
}));

export default function DiscordButton() {
  return <SquareButton variant="contained">Join Discord</SquareButton>;
}

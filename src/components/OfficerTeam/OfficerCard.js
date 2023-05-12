import { Paper } from "@mui/material";

export default function OfficerCard({ name, major }) {
  return (
    <Paper>
      <h3>{name}</h3>
      <h3>{major}</h3>
    </Paper>
  );
}

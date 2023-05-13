import { Paper } from "@mui/material";

export default function OfficerCard({ name, major, picture }) {
  function formatName() {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }
  return (
    <Paper>
      <h3>{name}</h3>
      <h3>{major}</h3>
      <img
        src={require(`../../../static/images/officers/${formatName()}`)}
        alt={`${name} headshot`}
        width={360}
        height={360}
      />
    </Paper>
  );
}

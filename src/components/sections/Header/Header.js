import { AppBar, Toolbar } from "@mui/material";

export default function Header() {
  const flexRow = {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
  };

  return (
    <AppBar position="static">
      <Toolbar sx={flexRow}>
        <div>ACC</div>
        <div style={flexRow}>
          <p>Home</p>
          <p>Join</p>
          <p>Projects</p>
        </div>
      </Toolbar>
    </AppBar>
  );
}

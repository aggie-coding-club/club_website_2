import Paper from "@mui/material/Paper";

export default function SponsorCard({name}) {
  function formatName(name) {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }

  const paperStyle = {
    width: "100px", 
    textAlign: "center",
  }

  return (
    <Paper sx={paperStyle} className="zoom">
      <img
        src={require(`../../../static/images/sponsors/${formatName(
          name
        )}`)}
        alt={`${name} logo`}
        loading="lazy"
        width={100}
        height={100}
      />
      {name}
    </Paper>
  );
}

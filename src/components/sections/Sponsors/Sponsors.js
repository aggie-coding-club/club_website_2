import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import allSponsors from "../../../static/data/sponsors.json"

const sponsors = allSponsors.sponsors

export default function Sponsors() {

  function formatName(name) {
    return name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  }
  return (
    <div>
      <h1>Sponsors</h1>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {sponsors.map((sponsor) => (
          <ImageListItem key={sponsor.key}>
            <img
              src={require(`../../../static/images/sponsors/${formatName(sponsor.name)}`)}
              alt={`${sponsor.name} logo`}
              loading="lazy"
              width={100}
              height= {100}
            />
          </ImageListItem>
        ))}
      </ImageList>

    </div>
  );
}

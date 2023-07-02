import allSponsors from "../../../static/data/sponsors.json";
import SponsorCards from "./SponsorCards";

const sponsors = allSponsors.sponsors;

export default function Sponsors() {
  return (
    <div>
      <h1>Sponsors</h1>
      <SponsorCards tier="Gold" sponsors={sponsors.gold} />
      <SponsorCards tier="Silver" sponsors={sponsors.silver} />
      <SponsorCards tier="Bronze" sponsors={sponsors.bronze} />
    </div>
  );
}

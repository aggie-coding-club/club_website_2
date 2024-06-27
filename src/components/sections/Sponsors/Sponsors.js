import allSponsors from "../../../static/data/sponsors.json";
import SponsorCards from "./SponsorCards";

const sponsors = allSponsors.sponsors;
const former_sponsors = allSponsors.former_sponsors;

export default function Sponsors() {
  return (
    <div id="sponsors">
      <h1>Former Sponsors</h1>
      <SponsorCards tier="Gold" sponsors={former_sponsors.gold} />
      <SponsorCards tier="Silver" sponsors={former_sponsors.silver} />
      <SponsorCards tier="Bronze" sponsors={former_sponsors.bronze} />
    </div>
  );
}

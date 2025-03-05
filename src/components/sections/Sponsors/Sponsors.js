import allSponsors from "../../../static/data/sponsors.json";
import SponsorCards from "./SponsorCards";

const sponsors = allSponsors.sponsors;
const former_sponsors = allSponsors.former_sponsors;

export default function Sponsors() {
  return (
    <div id="sponsors">
      <h1>Sponsors</h1>
      <SponsorCards tier="Gold" sponsors={sponsors.gold} />
      <SponsorCards tier="Silver" sponsors={sponsors.silver} />
      <SponsorCards tier="Bronze" sponsors={sponsors.bronze} />
      <SponsorCards tier="Former Sponsors" sponsors={former_sponsors.all} />
    </div>
  );
}

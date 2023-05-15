import accIcon from "../../../static/icons/acc.png";
import LinkTags from "./LinkTags";

const headerLinks = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Join",
    link: "#how-to-join",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

export default function Header() {
  const flexRow = {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
  };

  return (
    <div style={flexRow}>
      <div>
        <img src={accIcon} alt="ACC Icon" />
      </div>
      <LinkTags linkData={headerLinks} />
    </div>
  );
}

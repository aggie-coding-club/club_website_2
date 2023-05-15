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
    alignItems: "center",
    padding: "0.5rem 0",
  };

  return (
    <div style={flexRow}>
      <div>
        <img src={accIcon} alt="ACC Icon" width={125} />
      </div>
      <LinkTags linkData={headerLinks} />
    </div>
  );
}

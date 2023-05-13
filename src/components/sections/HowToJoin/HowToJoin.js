import peopleImage from "../../../static/images/people/people1.png";
import DiscordButton from "../../assets/DiscordButton";

export default function HowToJoin() {
  const containerStyle = {
    display: "flex",
    direction: "row",
  };
  return (
    <div>
      <h1>How To Join</h1>
      <div style={containerStyle}>
        <div>
          <p>
            Aggie Coding Club is open to all Texas A&M students regardless of
            coding experience or major at any point during the semester. There
            is
            <strong>no dues</strong> and <strong>no application forms</strong>.
            Simply start attending our weekly meetings! Follow the link below to
            join our Discord to connect and be informed of our meeting times.
          </p>
          <DiscordButton />
        </div>
        <div>
          <img src={peopleImage} alt="people in ACC" />
        </div>
      </div>
    </div>
  );
}

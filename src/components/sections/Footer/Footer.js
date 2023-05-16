import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import accIcon from "../../../static/icons/acc.png";

export default function Footer() {
  const flexRow = {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 0",
    marginTop: "40px",
  };
  const items = {
    padding: "10px",
  };

  

  return (
    

    <footer>
      <div style={flexRow}>
        <img src={accIcon} alt="ACC Icon" width={125} />
        <div>
          {/* instagram */}
          <a href="https://www.instagram.com/aggiecodingclub/?hl=en" target="_blank" style = {items}>
            <AiFillInstagram size={50}  alt="Instagram Icon" color="3766B4"/>
          </a>

          <a href="https://github.com/aggie-coding-club" target="_blank" style = {items}>
            <AiFillGithub size={50}  alt="GitHub Icon" color="3766B4"/>
          </a>
        </div>
        
      </div>
    </footer>
  );
}

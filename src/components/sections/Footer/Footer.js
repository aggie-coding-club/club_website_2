import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import accIcon from "../../../static/icons/acc.png";
import AiFillTikTok from '../../../components/assets/AiFillTikTok';
import Socials from '../../../components/assets/Socials';

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
        <Socials size={50}/>
        
      </div>
    </footer>
  );
}

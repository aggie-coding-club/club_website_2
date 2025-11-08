import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import AiFillTikTok from "./AiFillTikTok";

export default function Socials({ size }) {
  return (
    <div className="flex flex-row gap-4">
      <a
        href="https://www.instagram.com/aggiecodingclub/"
        target="_blank"
        rel="noreferrer"
        className="zoom"
      >
        <AiFillInstagram size={size} alt="Instagram Icon" color="3766B4" />
      </a>

      <a
        href="https://www.linkedin.com/company/aggie-codingclub/"
        target="_blank"
        rel="noreferrer"
        className="zoom"
      >
        <AiFillLinkedin size={size} alt="Linkedin Icon" color="3766B4" />
      </a>

      <a
        href="https://www.tiktok.com/@aggie.coding.club"
        target="_blank"
        rel="noreferrer"
        className="zoom"
      >
        <AiFillTikTok size={size} alt="TikTok Icon" color="3766B4" />
      </a>

      <a
        href="https://github.com/aggie-coding-club"
        target="_blank"
        rel="noreferrer"
        className="zoom"
      >
        <AiFillGithub size={size} alt="GitHub Icon" color="3766B4" />
      </a>

      <a
        href="mailto:aggiecodingclub@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="zoom"
      >
        <AiFillMail size={size} alt="Mail Icon" color="3766B4" />
      </a>
    </div>
  );
}

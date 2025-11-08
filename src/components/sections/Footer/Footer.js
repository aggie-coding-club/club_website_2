import Socials from "../../../components/assets/Socials";

export default function Footer() {
  return (
    <footer style={{ paddingBottom: "40px" }}>
      <div className="flex flex-row justify-center mt-20">
        <Socials size={50} />
      </div>
    </footer>
  );
}

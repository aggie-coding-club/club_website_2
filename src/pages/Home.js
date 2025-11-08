import Welcome from "../components/sections/Welcome/Welcome";
import WhatWeDo from "../components/sections/WhatWeDo/WhatWeDo";
import Schedule from "../components/sections/Schedule/Schedule";
import InstagramGallery from "../components/sections/InstagramGallery/InstagramGallery";

export default function Home() {
  return (
    <>
      <Welcome />
      <WhatWeDo />
      <Schedule />
      <InstagramGallery />
    </>
  );
}

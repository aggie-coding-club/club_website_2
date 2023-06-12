import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import capsher from "../../../static/sponsors/capsher.png";
import { Button } from "@mui/material";

export default function Sponsors() {
  let [dummyData, setDummyData] = useState([])

  useEffect(() => {
    console.log("loading dummy data");
    loadDummyData();
  }, []);

  function loadDummyData() {
    let dat = []
    for (let i = 0; i < 10; i++) {
      dat.push({ key: i, src: capsher });
    }

    setDummyData(dat)

  }
  return (
    <div>
      <h1>Sponsors</h1>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {dummyData.map((data) => (
          <ImageListItem key={data.key}>
            <img
              src={data.src}
              alt={"capsher logo"}
              loading="lazy"
              width={164}
              height={164}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Button onClick={() => console.log(dummyData)}>click</Button>
      <img
        src={capsher}
        alt={"capsher logo"}
        loading="lazy"
        width={164}
        height={164}
      />
    </div>
  );
}

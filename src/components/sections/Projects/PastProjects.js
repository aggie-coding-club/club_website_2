import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import pastProjectsData from "../../../static/data/pastProjectsData.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{ color: "gray" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{ color: "gray" }} />
    </div>
  );
}

export default function PastProjects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ width: '95%', margin: '0 auto'}}>
      <h1>Past Projects</h1>
      <Slider {...sliderSettings}>
        {pastProjectsData.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            linkAddress={project.linkAddress}
            imgType={project.imgType}
            key={project.key}
          />
        ))}
      </Slider>
    </div>
  );
}

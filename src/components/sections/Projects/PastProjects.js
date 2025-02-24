import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import pastProjectsData from "../../../static/data/pastProjectsData.json";
import { Button } from "@mui/material";


export default function PastProjects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div>
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

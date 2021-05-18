import React from "react";
import PageContainer from "../../shared/PageContainer";
import {
  BlueContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain } from "../../shared/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.css";
import { Carousel } from "react-responsive-carousel";
import morse from "../../assets/images/Morse-Code-Translator.png";
import calculator from "../../assets/images/Calculator.png";
import ruby from "../../assets/images/Ruby's-text-adventure.png";
const Projects = () => {
  return (
    <PageContainer>
      <BlueContainerMain>
        <HeaderMain>Projects</HeaderMain>
      </BlueContainerMain>
      <HeaderContainerSub>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          className="carousel"
          animationHandler="fade"
        >
          <div>
            <img src={morse} alt="Morse Code Translator" />
            <p className="legend">Morse Code Translator</p>
          </div>
          <div>
            <img src={calculator} alt="Calculator Project" />
            <p className="legend">Calculator Project</p>
          </div>
          <div>
            <img src={ruby} alt="Calculator Project" />
            <p className="legend">Ruby's Text Adventure</p>
          </div>
        </Carousel>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default Projects;

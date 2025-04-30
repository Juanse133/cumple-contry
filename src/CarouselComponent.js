import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css"; // Archivo CSS para estilos personalizados

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
      >
        <div>
          <img src="/images/1.jpeg" alt="Imagen 1" />
        </div>
        <div>
          <img src="/images/2.jpeg" alt="Imagen 2" />
        </div>
        <div>
          <img src="/images/3.jpeg" alt="Imagen 3" />
        </div>
        <div>
          <img src="/images/4.jpeg" alt="Imagen 4" />
        </div>
        <div>
          <img src="/images/5.jpeg" alt="Imagen 5" />
        </div>
        <div>
          <img src="/images/6.jpeg" alt="Imagen 6" />
        </div>
        <div>
          <img src="/images/7.jpeg" alt="Imagen 7" />
        </div>
        <div>
          <img src="/images/8.jpeg" alt="Imagen 8" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

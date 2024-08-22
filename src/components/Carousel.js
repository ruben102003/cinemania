import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const Carousel = ({ movies }) => {
  const settings = {
    dots: true, // Muestra puntos para la navegación
    infinite: true, // Habilita el bucle infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de diapositivas a mostrar a la vez
    slidesToScroll: 1, // Número de diapositivas a desplazar a la vez
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 5000, // Intervalo de la reproducción automática
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

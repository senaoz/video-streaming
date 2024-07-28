import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.scss";

const Slider = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie, index) => (
        <Carousel.Item key={index}>
          <a href={`${movie.link}`}>
            <img
              className="d-block w-100"
              src={movie.src}
              alt={`${movie.label}`}
            />
            <Carousel.Caption>
              <div>{movie.label}</div>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;

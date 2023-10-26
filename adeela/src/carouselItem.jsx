import React from "react";
import Carousel from 'better-react-carousel';

export const CarouselItem = () => {

  const forum1Image = require('./forum1.6cce6ab7.jpg');
  const forum2Image = require('./forum2.77028c90.png');
  const forum3Image = require('./forum3.4c22e2b8.jpg');

  return (
    <Carousel cols={2} rows={1} gap={10} loop>
    <Carousel.Item style={{ marginLeft: 10 }}>
      <img width="300px" src={forum1Image} />
    </Carousel.Item>
    <Carousel.Item style={{ marginLeft: 10 }}>
      <img width="300px" src={forum2Image} />
    </Carousel.Item>
    <Carousel.Item style={{ marginLeft: 10 }}>
      <img width="300px" src={forum3Image} />
    </Carousel.Item>
    <Carousel.Item>
      {/* anything you want to show in the grid */}
    </Carousel.Item>
    <p>This is so and so </p>
  </Carousel>
  );
};

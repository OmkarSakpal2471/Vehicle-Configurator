import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../component/ExampleCarouselImage';
import Navbar_tool from '../component/Navbar_tool';

function Home() {
  return (
    <div id="home">
      <Navbar_tool />
    <Carousel>
      <Carousel.Item>
      <ExampleCarouselImage src="/Hatchback.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>HatchBack</h3>
          <p>A hatchback is a car body configuration with a rear door that swings upward to provide access to the main interior of the car as a cargo area rather than just to a separated trunk. Hatchbacks may feature fold-down second-row seating, where the interior can be reconfigured to prioritize passenger or cargo volume.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage src="/Sedan.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>Sedan</h3>
          <p>A sedan is defined as a 4-door passenger car with a trunk that is separate from the passengers with a three-box body: the engine, the area for passengers, and the trunk. Throughout the generations, the definition of a sedan has been the same.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage src="/Suv.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>Suv</h3>
          <p>
          SUV stands for 'Sports Utility Vehicle', a fairly loose term but one that generally refers to stylish, sleek looking vehicles that offer elegant city driving but also handle rugged terrain thanks to a typical 4x4 capability.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;

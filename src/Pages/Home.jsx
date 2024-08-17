import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Home.css';
import Promotion from '../components/Promotion';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return (
    
    <div>
      <div className='hero-section'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows={false}
      >
        <div className="slider-text">
          <h2>Fast Food Restaurant</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto deleniti illo culpa? Ea, incidunt ullam velit quos totam unde esse similique beatae officiis. Excepturi ea sapiente minima nobis dolores.</p>
          <button className='order-button'>Order Name</button>
        </div>
        <div className="slider-text">
          <h2>Best Burger in town</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto deleniti illo culpa? Ea, incidunt ullam velit quos totam unde esse similique beatae officiis. Excepturi ea sapiente minima nobis dolores.</p>
          <button className='order-button'>Order Name</button>
        </div>
        <div className="slider-text">
          <h2>Best chole Bhature</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto deleniti illo culpa? Ea, incidunt ullam velit quos totam unde esse similique beatae officiis. Excepturi ea sapiente minima nobis dolores.</p>
          <button className='order-button'>Order Name</button>
        </div>

      </Carousel>
    </div>
    <Promotion/>
    <Testimonial />
    </div>
  )
}

export default Home

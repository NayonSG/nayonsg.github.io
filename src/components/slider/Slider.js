import React from 'react';
import Carousel, { slidesToScrollPlugin, slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import './Slider.css';

const Slider = () => {
  return (
    <div className="carousel-container">
        <div className='carousel-title'>
            <h2>Conheça alguns projetos:</h2>
        </div>

        <Carousel
            plugins={[
                'arrows',
                'infinite',
                'centered',
                'fastSwipe',
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 2000,
                  },
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                   numberOfSlides: 1,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                   numberOfSlides: 2
                  }
                },
            ]}
            animationSpeed={275}
            offset={25}
            itemWidth={300}
            slides={Slides}
            breakpoints={{
              960: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                     numberOfSlides: 1
                    }
                  },
                ]
               },
            }}
        
        />

    </div>
  )
}

export default Slider;
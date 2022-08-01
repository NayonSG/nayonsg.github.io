import React from 'react';
import Carousel, { slidesToScrollPlugin, slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import './Slider.css';

const Slider = () => {
  return (
    <div className="carousel-container">
        <div className='carousel-title'>
            <h2>Meus Projetos</h2>
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
                   numberOfSlides: 2,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                   numberOfSlides: 3
                  }
                },
            ]}
            animationSpeed={100}
            offset={30}
            itemWidth={350}
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
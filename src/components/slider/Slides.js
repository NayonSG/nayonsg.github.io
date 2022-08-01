import React from 'react';
import './Slider.css'

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2017/06/05/15/52/calculator-2374442_960_720.png",
        alt: "Calculadora",
        desc: "Calculadora",
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/08/06/06/18/checklist-2589418_960_720.jpg",
        alt: "To-do List",
        desc: "To-do List",
    },
    {
        src: "https://w0.peakpx.com/wallpaper/47/120/HD-wallpaper-the-ruins-place-ruins-art-fantasy.jpg",
        alt: "Tumba de Karth'Anos",
        desc: "Tumba de Karth'Anos - Adventure Game",
    }
]


const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;
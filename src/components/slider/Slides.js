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
        alt: "App de Lista de tarefas",
        desc: "To-do List",
    },
    {
        src: "https://w0.peakpx.com/wallpaper/47/120/HD-wallpaper-the-ruins-place-ruins-art-fantasy.jpg",
        alt: "Browser Game Tumba de Karth'Anos",
        desc: "Tumba de Karth'Anos - Adventure Game",
    },
    {
        src: "https://shotcaller.vercel.app/imagens/banner.png",
        alt: "App Shotcaller",
        desc: "Shotcaller",
    },
    {
        src: "https://media.licdn.com/dms/image/C4E22AQEMtnb64hfcOg/feedshare-shrink_2048_1536/0/1667575652276?e=1685577600&v=beta&t=sxC3NPzZWSjTKedyG5gQHLY6pPWwxMFt-q0SJbK5Kgw",
        alt: "Calendário dos jogos da Copa do Mundo 2022",
        desc: "NLW Copa - Calendário",
    },
    {
        src: "https://repository-images.githubusercontent.com/627021791/64a1dec9-c493-489f-b6e9-686437240901",
        alt: "Apeperia",
        desc: "Apeperia",
    },
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
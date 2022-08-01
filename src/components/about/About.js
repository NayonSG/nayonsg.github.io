import React from 'react';
import "./About.css"
import aboutImg from "../../media/aboutImg.jpg"


const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>Um pouco sobre mim</h3>
            <p>Me chamo Nayon Silva Gomes, moro em Belo Horizonte/MG e sempre fui muito curioso sobre programação e coding em geral, mas apenas recentemente tive coragem para começar a aprender sobre. Aprendi um pouco sobre HTML, CSS, JavaScript e React, programando alguns projetos pequenos e simples para aperfeiçoar os conhecimentos que obtive. Agora busco por uma oportunidade na área que, além de agregar conhecimento, me desafie e ajude a aprimorar minhas habilidades como programador, seja nas linguagens que tenho conhecimento, ou em outras novas.</p>
        </div>
        <div className="about-img">
            <img classname="img" src={aboutImg} alt="about"
            />
        </div>

    </div>
  )
}

export default About;
import React from 'react';
import "./About.css"
import aboutImg from "../../media/aboutImg.jpg"


const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>Um pouco sobre mim</h3>
            <p>Me chamo Nayon Silva Gomes, tenho 33 anos e moro em Belo Horizonte/MG. Sempre tive bastante curiosidade em aprender programação em geral, mas nunca pensei que poderia. Em 2022, resolvi realizar a transição de carreira e comecei a buscar formas de aprender linguagens e tecnicas de programação. <br/><br/> Aprendi um pouco sobre HTML, CSS, JavaScript e React, programando alguns projetos pequenos e simples para aperfeiçoar e aplicar os conhecimentos que obtive. Agora busco por uma oportunidade na área que, além de agregar conhecimento, me desafie e ajude a aprimorar minhas habilidades como programador front-end, seja nas linguagens que tenho conhecimento, ou em outras novas.</p>
        </div>
        <div className="about-img">
            <img classname="img" src={aboutImg} alt="about"
            />
        </div>

    </div>
  )
}

export default About;
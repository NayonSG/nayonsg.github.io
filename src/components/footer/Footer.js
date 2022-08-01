import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Nayon Silva Gomes</h1>
            <h2>Belo Horizonte/MG - Brasil</h2>
        </div>
        <div className='footer-contact'>
            <h3>Entre em contato</h3>
            <p>Através das redes sociais abaixo.</p>
        </div>
        <div className='footer-sns'>
            <div className='designed-by'>
                Designed by Nayon Silva Gomes
            </div>
            <div className='sns-links'>
                <a href="https://www.linkedin.com/in/nayon-silva-66964966/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href="https://github.com/NayonSG" target="_blank" rel='noreferrer'>
                    <i className='fab fa-github github'></i>
                </a>
                <a href="https://www.facebook.com/nayon.gomes" target="_blank" rel='noreferrer'>
                    <i className='fab fa-facebook facebook'></i>
                </a>
                <a href="mailto:nayons.gomes@gmail.com" target="_blank" rel='noreferrer'>
                    <i className='fab fa-google google'></i>
                </a>

            </div>

        </div>

    </footer>
  )
}

export default Footer
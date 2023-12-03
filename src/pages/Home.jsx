import React, { useEffect, useRef } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

import image_home from '../assets/img/imagem-home.webp';
import cerca_viva from '../assets/img/cerca-viva.png';
import jardineiro from '../assets/img/jardineiro-1.webp';


function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let currentSlide = 0;
    const slides = sliderRef.current.querySelectorAll('.slider-image');
    const totalSlides = slides.length;

    const showSlide = (slideIndex) => {
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
      slides[slideIndex].style.display = 'block';
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    };

    // Start the slider
    const sliderInterval = setInterval(nextSlide, 2000);

    // Cleanup
    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <section className="container-home">
      <div className='home-left'>
        <h2>Cansado da grama alta?</h2>
        <p>Não deixe para amanhã</p>
        <p>Faça um orçamento já</p>
        <a href="https://wa.me/5518997114059?text=Ol%C3%A1+Luciano%2C+tudo+bem%3F+Podemos+conversar+sobre+um+or%C3%A7amento%3F" className="button-home">Saiba Mais</a>
      </div>
      <div className='home-right'>

        <div ref={sliderRef} className="slider">
          <img className="slider-image" src={image_home} alt="Slide 1" />
          <img className="slider-image" src={cerca_viva} alt="Slide 2" />
          <img className="slider-image" src={jardineiro} alt="Slide 3" />
        </div>

        <h3>De um olhada no meu trabalho</h3>
        <Link to="/imagens">Ver Mais</Link>
      </div>
    </section>
  );
}

export default Home;
import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

import image_home from '../assets/img/imagem-home.webp';

function Home() {
  return (
    <section className="container-home">
      <div className='home-left'>
        <h2>Cansado da grama alta?</h2>
        <p>Não deixe para amanhã</p>
        <p>Faça um orçamento já</p>
        <a href="https://wa.me/5518997114059?text=Ol%C3%A1+Luciano%2C+tudo+bem%3F+Podemos+conversar+sobre+um+or%C3%A7amento%3F" className="button-home">Saiba Mais</a>
      </div>
      <div className='home-right'>
        <img src={image_home} alt="Imagem representativa" />
        <h3>De um olhada no meu trabalho</h3>
        <Link to="/imagens">Ver Mais</Link>
      </div>
    </section>
  );
}

export default Home;

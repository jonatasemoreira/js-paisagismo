
import './Imagens.css';

import antes_aa from '../assets/img/antes/primeira.jpg'
import antes_ab from '../assets/img/antes/segunda.jpg'
import antes_ac from '../assets/img/antes/terceira.jpg'
import antes_ad from '../assets/img/antes/quarta.jpg'

export default function Imagens(){
    return (
        <section className="container-imagens">
            <h1>Meus Trabalhos</h1>
            <div className='container-imagens'>
                <img src={antes_aa} alt="antes" /> 
                <img src={antes_ab} alt="antes" />   
                <img src={antes_ac} alt="depois" />   
                <img src={antes_ad} alt="depois" />   
            </div>
        </section>
    )
}
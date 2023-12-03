
import './Footer.css';

//icons
import { 
    BsWhatsapp, 
    BsFacebook,
    BsInstagram
} from "react-icons/bs";

export default function Footer(){
    return (
        <>
            <footer className='container-footer'>
                <div className="footer-head">
                    <nav>
                        <ul>
                            <li><a href="">Em Breve!</a></li>
                            <li><a href="">Em Breve!</a></li>
                            <li><a href="">Em Breve!</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="rede-social">
                    <nav>
                        <ul>
                            <li>
                                <a href="https://wa.me/5518997114059?text=Ol%C3%A1+Luciano%2C+tudo+bem%3F+Podemos+conversar+sobre+um+or%C3%A7amento%3F"><BsWhatsapp c/></a>
                            </li>
                            <li>
                                <a href="https://m.facebook.com/profile.php?id=100046587968206"><BsFacebook /></a>
                            </li>
                            <li>
                                <a href="https://instagram.com/luciano.mg1975?igshid=OGQ5ZDc2ODk2ZA=="><BsInstagram  /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-main">
                    <p>&copy; 2023 - Jonatas Elieser Moreira</p>
                </div>
            </footer>
        </>
    )
}
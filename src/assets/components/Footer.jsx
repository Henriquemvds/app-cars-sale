import { Link } from "react-router-dom";
import '../styles/components/Footer.css'
import iconInstagram from '../icons/instagram.svg'
import iconGitHub from '../icons/gitHub.svg'

function Footer() {

    return (
        <div className='infoAbout'>
            <div className='presentation'>
                <h2>
                    Cars sale
                </h2>
                <p>Venda e compre seu automóvel neste simulador desenvolvido por Henrique Santos.</p>
            </div>

            <div className='buyAndSell'>
                <div className='buy'>
                    <span><b>Comprar</b></span>
                    <Link  style={{ textDecoration: 'none', color: '#000'}} to={`/`}>
                        <span>Selecione seu veículo</span>
                    </Link>
                </div>
               
            </div>

            <div className='help'>
                <span><b>Ajuda</b></span>
                <span>Como usar?</span>
                <span>Entre em contato</span>
                <span>Termos e condições</span>
                <span>Política de privacidade</span>
            </div>

            <div className='contact'>
                <span><b>Me siga</b></span>
                <div className='iconsContact'>
                    <a href="https://www.instagram.com/henrique.mv/">
                        <img src={iconInstagram} className='iconContact' />
                    </a>
                    <a href="https://github.com/Henriquemvds">
                        <img src={iconGitHub} className='iconContact' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
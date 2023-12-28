import '../styles/Footer.css'
import instagram from '../icons/instagram.svg'

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
                    <span>Selecione seu veículo</span>
                </div>
                <div className='sell'>
                    <span><b>Vender</b></span>
                    <span>Venda seu veículo</span>
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
                <img src={instagram} className='instagram'/>
            </div>

        </div>
    )
}

export default Footer;
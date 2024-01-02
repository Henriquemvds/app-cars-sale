import { Link } from "react-router-dom";
import '../styles/components/HeaderBuy.css'

function OptionsNavs() {

    return (
        <div className='interactionOptions'>
            <h4>
                Detalhes do veículo
            </h4>
            <div className='linkSell'>
                <Link style={{ textDecoration: 'none', color: '#000' }} to={`/`}>
                    <button>
                        Ver outros
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OptionsNavs;
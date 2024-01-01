import '../styles/HeaderBuy.css'

function OptionsNavs() {

    return (
        <div className='interactionOptions'>
            <h4>
                Detalhes do veículo
            </h4>
            <div className='linksPages'>
                <div className='linkSell'>
                    <button>
                        Comprar agora
                    </button>
                </div>
                <div className='linkSell'>
                    <button>
                        Ver outros
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OptionsNavs;
import '../styles/components/HeaderSell.css'
import iconCar from '../icons/car.svg'

function HeaderSell() {

    return (
        <div className='alignHeaderSell'>
            <h2>Venda do automóvel</h2>
            <div className='interactHeaderSell'>
            <img src={iconCar} className='iconCar' />
            <span>Ajuda</span>
            <button>Comprar</button>
            <img src={iconCar} className='iconCar' />
            </div>
        </div>
    )
}

export default HeaderSell;
import '../styles/BuyItems.css'
import carExample from '../images/carWallpaper.jpg'

function BuyItems() {

    return (
        <div>
            <figure className='itemSelect'>
                <img src={carExample} className='carExample' />
                <div className='vehiclePresentation'>
                    <h4>nome do carro</h4>
                    <span>descrição do carro</span>
                </div>
                <div className='infoPrice'>
                    <span><b>Preço</b></span>
                    <span>R$100.000,00 </span>
                </div>
                <div className='infoMethod'>
                    <span><b>Método de pagamento</b></span>
                    <select className='dropdown'>
                        <option>Selecione a forma</option>
                    </select>
                </div>
                <span>Detalhes da compra</span>
            </figure>

        </div>
    )
}

export default BuyItems;
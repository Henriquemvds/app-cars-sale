import '../styles/components/BuyItem.css'
import carExample from '../images/carWallpaper.jpg'
import iconCorrect from '../icons/correct.svg'

function BuyItem() {

    return (
        <div className='detailsSelect'>
            <figure className='itemSelect'>
                <img src={carExample} className='carExampleBuy' />
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
    
            <div className='buyConfirmed'>
                <img src={iconCorrect} className='iconCorrect'/>
                <span><b>É sempre um prazer fazer negócios com você!</b></span>
            </div>
         

        </div>
    )
}

export default BuyItem;
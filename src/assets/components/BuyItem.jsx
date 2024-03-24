import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/components/BuyItem.css'
import carExample from '../public/images/carWallpaper.jpg'
import iconCorrect from '../icons/correct.svg'
import { useEffect, useState } from 'react'

function BuyItem({ props }) {

    const [vehicles, setVehicles] = useState([])

    const getVehicles = () => {
        props.map(() => setVehicles([...props]))
    }

    useEffect(() => {
        getVehicles()
    }, [props])


    return (
        <div className='detailsSelect'>
            {vehicles.map((item) => (
                <>
                    <figure className='itemSelect'>
                        <img src={carExample} className='carExampleBuy'/>
                        <div className='vehiclePresentation'>
                            <h4>{item.nome_automovel}</h4>
                            <span><b>Tipo:</b> {item.modelo_automovel}, <b>Marca:</b> {item.marca_automovel}, <b>Ano:</b> {item.ano_automovel}</span>
                        </div>
                        <div className='infoPrice'>
                            <span><b>Preço</b></span>
                            <span>R${item.preco_automovel}</span>
                        </div>
                        <div className='infoMethod'>
                            <span><b>Método de pagamento</b></span>
                            <select className='dropdown'>
                                <option>Selecione a forma</option>
                            </select>
                        </div>
                        <span>Detalhes da compra</span>
                    </figure>
                </>
))}

            <div className='buyConfirmed'>
                <img src={iconCorrect} className='iconCorrect' />
                <span><b>É sempre um prazer fazer negócios com você!</b></span>
            </div>


        </div>
    )
}

export default BuyItem;
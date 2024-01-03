import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/components/BuyItem.css'
import carExample from '../images/carWallpaper.jpg'
import iconCorrect from '../icons/correct.svg'
import { useEffect, useState } from 'react'

function BuyItem() {

    const [car, setCar] = useState([])

    let { id_carro } = useParams()

    const getCar = () => {
        axios.get(`http://localhost:3000/carros/${id_carro}`)
            .then((response) => setCar(response.data))
    }

    useEffect(() => {
        getCar()
    }, [])

    return (
        <div className='detailsSelect'>
            <figure className='itemSelect'>
                {car.map((item) => (
                    <>
                        <img src={carExample} className='carExampleBuy' />
                        <div className='vehiclePresentation'>
                            <h4>{item.nome_carro}</h4>
                            <span><b>Tipo:</b> {item.modelo_carro}, <b>Marca:</b> {item.marca_carro}, <b>Ano:</b> {item.ano_carro}</span>
                        </div>
                        <div className='infoPrice'>
                            <span><b>Preço</b></span>
                            <span>R${item.preco_carro}</span>
                        </div>
                        <div className='infoMethod'>
                            <span><b>Método de pagamento</b></span>
                            <select className='dropdown'>
                                <option>Selecione a forma</option>
                            </select>
                        </div>
                        <span>Detalhes da compra</span>
                    </>
                ))}
            </figure>

            <div className='buyConfirmed'>
                <img src={iconCorrect} className='iconCorrect' />
                <span><b>É sempre um prazer fazer negócios com você!</b></span>
            </div>


        </div>
    )
}

export default BuyItem;
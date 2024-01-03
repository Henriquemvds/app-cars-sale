import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import carExample from '../images/carWallpaper.jpg'
import '../styles/components/VehicleList.css'
import { useState, useEffect } from "react";

function VehicleList({ props }) {

    const [cars, setCars] = useState([])

    const getCars = () => {
        props.map(() => setCars([...props]))
    }

    useEffect(() => {
        getCars()
    }, [props])

    return (
        <div>
            <article className='dropdownInteraction'>
                <select className='dropdown'>
                    <option>Marca</option>
                </select>
                <select className='dropdown'>
                    <option>Modelo</option>
                </select>
                <select className='dropdown'>
                    <option>Ano</option>
                </select>
                <select className='dropdown'>
                    <option>Faixa de preço</option>
                </select>
            </article>

            <figure className='vehicleList'>
                {cars.map((item) => (
                    <>
                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/buy/${item.id_carro}`}>
                            <div className='item'>
                                <img src={carExample} className='carExample' />
                                <div className='details'>
                                    <span>{item.nome_carro}</span>
                                    <div className='infoBatch'>
                                        <span>{item.quantidade_carro}</span>
                                        <img src={iconCar} className='iconCar'></img>
                                    </div>
                                </div>
                                <span>
                                    R${item.preco_carro}
                                </span>
                            </div>
                        </Link>
                    </>
                ))}
            </figure>
        </div>

    )
}

export default VehicleList;
import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import carExample from '../images/carWallpaper.jpg'
import '../styles/components/VehicleList.css'
import { useState, useEffect } from "react";

function VehicleList({ props }) {

    const [cars, setCars] = useState([])
    const [year, setYear] = useState('Ano')
    const [price, setPrice] = useState('Faixa de preço')
    const [brand, setBrand] = useState('Marca')
    const [model, setModel] = useState('Modelo')
    const years = []
    const brands = [
        'Aston Martin',
        'Audi',
        'BMW',
        'BYD',
        'CAOA Chery',
        'Chevrolet',
        'Citroën',
        'Effa',
        'Ferrari',
        'Fiat',
        'Ford',
        'Foton',
        'Haval',
        'Honda',
        'Hyundai',
        'Iveco',
        'JAC',
        'Jaguar',
        'Jeep',
        'Kia',
        'Lamborghini',
        'Land Rover',
        'Lexus',
        'Maserati',
        'McLaren',
        'Mercedes-AMG',
        'Mercedes-Benz',
        'Mini',
        'Mitsubishi',
        'Nissan',
        'Ora',
        'Peugeot',
        'Porsche',
        'RAM',
        'Renault',
        'Rolls-Royce',
        'Seres',
        'Subaru',
        'Suzuki',
        'Toyota',
        'Volkswagen',
        'Volvo'
    ]

    const models = [
        'Hatch', 'Sedã', 'SUV', 'Picapes', 'Crossover', 'Perua', 'Minivan', 'Esportivo'
    ]

    const getCars = () => {
        props.map(() => setCars([...props]))
    }

    var maxValue = (new Date()).getFullYear();
    var minValue = 1900;

    for (let year = minValue; year <= maxValue; year++) {
        years.push(year)
    }

    useEffect(() => {
        getCars()
    }, [props])

    return (
        <div>
            <article className='dropdownInteraction'>
                <select className='dropdown' onChange={e => setBrand(e.target.value)}>
                    <option>Marca</option>
                    <option value='all'>Todos</option>
                    {brands.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}

                </select>
                <select className='dropdown' onChange={e => setModel(e.target.value)}>
                    <option>Modelo</option>
                    <option value='all'>Todos</option>
                    {models.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setYear(e.target.value)}>
                    <option value='Ano'>Ano</option>
                    <option value='all'>Todos</option>
                    {years.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setPrice(e.target.value)}>
                    <option>Faixa de preço</option>
                    <option value='all'>Todos</option>
                    <option value='1'>R$10.000,00 até 50.000,00</option>
                    <option value='2'>R$50.000,00 até 100.000,00</option>
                    <option value='3'>R$100.000,00 até 200.000,00</option>
                    <option value='4'>R$200.000,00 até 300.000,00</option>
                    <option value='5'>R$400.000,00 até 500.000,00</option>
                </select>
            </article>

            <figure className='vehicleList'>
                {cars.map((item) => (
                    <>
                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/buy/${item.id_carro}`} >
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
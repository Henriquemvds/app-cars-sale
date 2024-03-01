import axios from 'axios'
import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import carExample from '../public/images/carWallpaper.jpg'
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
        'Aston Martin', 'Audi', 'BMW', 'BYD',
        'CAOA Chery', 'Chevrolet', 'Citroën',
        'Effa', 'Ferrari', 'Fiat', 'Ford', 'Foton',
        'Haval', 'Honda', 'Hyundai', 'Iveco',
        'JAC', 'Jaguar', 'Jeep', 'Kia',
        'Lamborghini', 'Land Rover', 'Lexus', 'Maserati',
        'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mini',
        'Mitsubishi', 'Nissan', 'Ora',
        'Peugeot', 'Porsche', 'RAM', 'Renault',
        'Rolls-Royce', 'Seres', 'Subaru', 'Suzuki',
        'Toyota', 'Volkswagen', 'Volvo'
    ]
    const models = [
        'Hatch', 'Sedan', 'SUV', 'Picapes', 'Crossover', 'Perua', 'Minivan', 'Esportivo'
    ]

    const getCars = () => {
        props.map(() => setCars([...props]))
    }

    var maxValue = (new Date()).getFullYear();
    var minValue = 1950;

    for (let year = minValue; year <= maxValue; year++) {
        years.push(year)
    }

    const getFilter = () => {
        let requisicao = {
            marca_carro: brand,
            modelo_carro: model,
            ano_carro: year
        }
        axios
            .post("http://localhost:3000/carros/filtrar-carros", requisicao)
            .then((response) => {
                setCars(response.data)
            })
    }

    const getFilterPrice = () => {
        let requisicao = {
            preco_carro1: null,
            preco_carro2: null
        }
        if (price == 1) {
            requisicao = {
                preco_carro1: 6000,
                preco_carro2: 10000
            }
        } else if (price == 2) {
            requisicao = {
                preco_carro1: 10000,
                preco_carro2: 50000
            }
        } else if (price == 3) {
            requisicao = {
                preco_carro1: 50000,
                preco_carro2: 100000
            }
        } else if (price == 4) {
            requisicao = {
                preco_carro1: 100000,
                preco_carro2: 200000
            }
        } else if (price == 5) {
            requisicao = {
                preco_carro1: 300000,
                preco_carro2: 400000
            }
        } else if (price == 5) {
            requisicao = {
                preco_carro1: 400000,
                preco_carro2: 500000
            }
        }
        axios
            .post("http://localhost:3000/carros/filtrar-carros-preco", requisicao)
            .then((response) => {
                setCars(response.data)
            })
    }

    useEffect(() => {
        if (brand !== 'Marca' || model !== 'Modelo' || year !== 'Ano') {
            getFilter()
        } else {
            getCars()
        }
    }, [brand, model, year])

    useEffect(() => {
        if (price !== 'Faixa de preço') {
            getFilterPrice()
        } else {
            getCars()
        }
    }, [price])

    console.log(cars)

    useEffect(() => {
        getCars()
    }, [props])

    return (
        <div>
            <article className='dropdownInteraction'>
                <select className='dropdown' onChange={e => setBrand(e.target.value)}>
                    <option>Marca</option>
                    {brands.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}

                </select>
                <select className='dropdown' onChange={e => setModel(e.target.value)}>
                    <option>Modelo</option>
                    {models.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setYear(e.target.value)}>
                    <option value='Ano'>Ano</option>
                    {years.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setPrice(e.target.value)}>
                    <option>Faixa de preço</option>
                    <option value='1'>R$6.000,00 até 10.000,00</option>
                    <option value='2'>R$10.000,00 até 50.000,00</option>
                    <option value='3'>R$50.000,00 até 100.000,00</option>
                    <option value='4'>R$100.000,00 até 200.000,00</option>
                    <option value='5'>R$200.000,00 até 300.000,00</option>
                    <option value='6'>R$400.000,00 até 500.000,00</option>
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
                                        <img src={iconCar} className='iconCar'></img>
                                    </div>
                                </div>
                                <span>
                                    R${item.preco_carro},00
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
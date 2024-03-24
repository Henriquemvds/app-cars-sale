import axios from 'axios'
import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/VehicleList.css'
import { useState, useEffect } from "react";

function VehicleList({ props }) {

    const [vehicles, setVehicles] = useState([])
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

    const getVehicles = () => {
        props.map(() => setVehicles([...props]))
    }

    var maxValue = (new Date()).getFullYear();
    var minValue = 1950;

    for (let year = minValue; year <= maxValue; year++) {
        years.push(year)
    }

    const getFilter = () => {
        let requisicao = {
            marca_automovel: brand,
            modelo_automovel: model,
            ano_automovel: year
        }
        axios
            .post("https://api-cars-sale-blue.vercel.app/automoveis/filtrar-automoveis", requisicao)
            .then((response) => {
                setCars(response.data)
            })
    }

    const getFilterPrice = () => {
        let requisicao = {
            preco_automovel1: null,
            preco_automovel2: null
        }
        if (price == 1) {
            requisicao = {
               preco_automovel1: 6000,
                preco_automovel2: 10000
            }
        } else if (price == 2) {
            requisicao = {
               preco_automovel1: 10000,
                preco_automovel2: 50000
            }
        } else if (price == 3) {
            requisicao = {
               preco_automovel1: 50000,
                preco_automovel2: 100000
            }
        } else if (price == 4) {
            requisicao = {
               preco_automovel1: 100000,
                preco_automovel2: 200000
            }
        } else if (price == 5) {
            requisicao = {
               preco_automovel1: 300000,
                preco_automovel2: 400000
            }
        } else if (price == 5) {
            requisicao = {
               preco_automovel1: 400000,
                preco_automovel2: 500000
            }
        }
        axios
            .post("https://api-cars-sale.vercel.app/carros/filtrar-automoveis-preco", requisicao)
            .then((response) => {
                setCars(response.data)
            })
    }

    useEffect(() => {
        if (brand !== 'Marca' || model !== 'Modelo' || year !== 'Ano') {
            getFilter()
        } else {
            getVehicles()
        }
    }, [brand, model, year])

    useEffect(() => {
        if (price !== 'Faixa de preço') {
            getFilterPrice()
        } else {
            getVehicles()
        }
    }, [price])

    console.log(vehicles)

    useEffect(() => {
        getVehicles()
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
                {vehicles.map((item) => (
                    <>
                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/buy/${item.id_automovel}`} >
                            <div className='item'>
                                <img src={`https://api-cars-sale.vercel.app/automoveis/${item.imagem_automovel}`} className='carExample' />
                                <div className='details'>
                                    <span>{item.nome_automovel}</span>
                                    <div className='infoBatch'>
                                        <img src={iconCar} className='iconCar'></img>
                                    </div>
                                </div>
                                <span>
                                    R${item.preco_automovel},00
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
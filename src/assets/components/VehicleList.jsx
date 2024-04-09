import axios from 'axios'
import { Link, useSearchParams } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/VehicleList.css'
import { useState, useEffect, useMemo } from "react";
import Pagination from '@mui/material/Pagination';

function VehicleList({ props }) {

    const [vehicles, setVehicles] = useState([])
    const [vehiclesPages, setVehiclesPages] = useState([])
    const [year, setYear] = useState('Ano')
    const [price, setPrice] = useState('Faixa de preço')
    const [brand, setBrand] = useState('Marca')
    const [model, setModel] = useState('Modelo')
    const [pageSelect, setPageSelect] = useSearchParams()
    const [alertFilter, setAlertFilter] = useState('')
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
        'Hatch', 'Sedan', 'SUV', 'Caminhote', 'Crossover', 'Perua', 'Minivan', 'Esportivo'
    ]
    let countVehicles = 0
    const limitList = 10

    const getVehicles = () => {
        props.map(() => setVehicles([...props]))
        setVehiclesPages(paginate(props, 10, page))
    }
    for (let i = 0; countVehicles < vehicles.length; i++) {
        countVehicles = i
    }

    var maxValue = (new Date()).getFullYear() + 1;
    var minValue = 1950;

    for (let year = minValue; year <= maxValue; year++) {
        years.push(year)
    }

    const getFilter = () => {
        let requisicao = {
            marca_automovel: brand,
            modelo_automovel: model,
            ano_automovel: year,
            preco_automovel1: null,
            preco_automovel2: null
        }
        if (price == 1) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 6000,
                preco_automovel2: 10000
            }
        } else if (price == 2) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 10000,
                preco_automovel2: 50000
            }
        } else if (price == 3) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 50000,
                preco_automovel2: 100000
            }
        } else if (price == 4) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 100000,
                preco_automovel2: 200000
            }
        } else if (price == 5) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 300000,
                preco_automovel2: 400000
            }
        } else if (price == 6) {
            requisicao = {
                marca_automovel: brand,
                modelo_automovel: model,
                ano_automovel: year,
                preco_automovel1: 400000,
                preco_automovel2: 500000
            }
        }
        axios
            .post("https://api-cars-sale-blue.vercel.app/automoveis/filtrar-automoveis", requisicao)
            .then((response) => {
                setVehicles(response.data)
                setVehiclesPages(response.data)
                setPageSelect({ page: '1' })
            })
    }

    useEffect(() => {
        if (brand !== 'Marca' || model !== 'Modelo' || year !== 'Ano' || price !== 'Faixa de preço') {
            setAlertFilter('Modifique todos os filtros para obter resultados!')
            getFilter()
        } else {
            setAlertFilter('Faça sua filtragem!')
            getVehicles()
        }
    }, [brand, model, year, price])

    const paginate = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const page = useMemo(() => {
        return Number(pageSelect.get('page') || '1')
    }, [pageSelect])

    useEffect(() => {
        setVehiclesPages(paginate(vehicles, 10, page))
    }, [page])

    useEffect(() => {
        getVehicles()
    }, [props])

    return (
        <div>
            <article className='dropdownInteraction'>
                <select className='dropdown' onChange={e => setBrand(e.target.value)}>
                    <option value='Marca'>Marca</option>
                    {brands.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}

                </select>
                <select className='dropdown' onChange={e => setModel(e.target.value)} >
                    <option>Modelo</option>
                    {models.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setYear(e.target.value)} >
                    <option value='Ano'>Ano</option>
                    {years.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setPrice(e.target.value)} >
                    <option>Faixa de preço</option>
                    <option value='1'>R$6.000,00 até 10.000,00</option>
                    <option value='2'>R$10.000,00 até 50.000,00</option>
                    <option value='3'>R$50.000,00 até 100.000,00</option>
                    <option value='4'>R$100.000,00 até 200.000,00</option>
                    <option value='5'>R$200.000,00 até 300.000,00</option>
                    <option value='6'>R$400.000,00 até 500.000,00</option>
                </select>

                <span style={{ color: '#808080' }}>{alertFilter}</span>

            </article>

            <figure className='vehicleList'>
                {vehiclesPages.map((item) => (
                    <>
                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/buy/${item.id_automovel}`} >
                            <div className='item'>
                                <img src={`${item.imagem_automovel}`} className='carExample' />
                                <div className='details'>
                                    <span>{item.nome_automovel}</span>
                                    <div className='infoBatch'>
                                        <img src={iconCar} className='iconCar'></img>
                                    </div>
                                </div>
                                <span style={{ color: '#808080', fontSize: 10 }}>{item.descricao_automovel}</span>
                                <span style={{ color: '#808080', fontSize: 10 }}>{item.ano_automovel}</span>
                                <span>
                                    {item.preco_automovel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </span>
                            </div>
                        </Link>
                    </>
                ))}

            </figure>
            {((countVehicles > 0 && countVehicles != limitList) &&
                <Pagination
                    page={page}
                    onChange={(_, newPage) => setPageSelect({ page: newPage.toString() }, { replace: true })}
                    count={Math.ceil(countVehicles / limitList)}
                    variant="outlined"
                    shape="rounded"
                />
            )}
        </div>

    )
}

export default VehicleList;
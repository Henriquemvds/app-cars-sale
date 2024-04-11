import axios from 'axios'
import { Link, useSearchParams } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/VehicleList.css'
import { useState, useEffect, useMemo, useContext } from "react";
import { VehiclesContext } from '../context/vehicles'
import Pagination from '@mui/material/Pagination';

function VehicleList() {

    const { vehicles, getVehicles } = useContext(VehiclesContext)
    const [vehiclesPages, setVehiclesPages] = useState([])
    const [vehiclesFilter, setVehiclesFilter] = useState([])
    const [year, setYear] = useState('0')
    const [price, setPrice] = useState('0')
    const [brand, setBrand] = useState('0')
    const [model, setModel] = useState('0')
    const [pageSelect, setPageSelect] = useSearchParams()
    const [alertFilter, setAlertFilter] = useState('Faça sua filtragem!')
    const [filter, setFilter] = useState(false)
    const [disable, setDisable] = useState(false)

    const years = []
    const brands = [
        'Aston Martin', 'Audi', 'BMW', 'BYD',
        'Chevrolet', 'Citroën', 
        'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Iveco',
        'JAC', 'Jaguar', 'Jeep', 'Land Rover', 'Lexus', 'Maserati',
        'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 
        'Mitsubishi', 'Nissan',
        'Peugeot', 'Porsche', 'RAM', 'Renault',
        'Toyota', 'Volkswagen',
    ]
    const models = [
        'Hatch', 'Sedan', 'SUV', 'Caminhote', 'Crossover', 'Perua', 'Minivan', 'Esportivo'
    ]
    let requisicao = {
        marca_automovel: null,
        modelo_automovel: null,
        ano_automovel: null,
        preco_automovel1: null,
        preco_automovel2: null
    }
    let countVehicles = 0
    let countVehiclesFilter = 0
    let limitList = 0

    const { innerWidth } = window;
    if (innerWidth > 440){
        limitList = 50
    } else if (innerWidth <= 440) {
        limitList = 10
    }
    
    for (let i = 0; countVehicles < vehicles.length; i++) {
        countVehicles = i
    }
    for (let i = 0; countVehiclesFilter < vehiclesFilter.length; i++) {
        countVehiclesFilter = i
    }
    
    var maxValue = (new Date()).getFullYear() + 1;
    var minValue = 1980;
    for (let year = minValue; year <= maxValue; year++) {
        years.push(year)
    }
    
    const find = (values) => {
        setFilter(true)
        const resultado = vehicles.filter((item) => {
            const marca_automovel = values.marca_automovel ?? item.marca_automovel;
            const modelo_automovel = values.modelo_automovel ?? item.modelo_automovel;
            const ano_automovel = values.ano_automovel ?? item.ano_automovel;
            const preco_automovel1 = values.preco_automovel1 ?? item.preco_automovel;
            const preco_automovel2 = values.preco_automovel2 ?? item.preco_automovel;
            if (marca_automovel === item.marca_automovel &&
                modelo_automovel === item.modelo_automovel &&
                ano_automovel === item.ano_automovel &&
                preco_automovel1 <= item.preco_automovel &&
                preco_automovel2 >= item.preco_automovel
            ) return item;
        });
        return resultado;
    }

    const getFilter = () => {
        requisicao.marca_automovel = brand
        requisicao.modelo_automovel = model
        requisicao.ano_automovel = year
        
        if (brand == '0') {
            requisicao.marca_automovel = null
        }
        if (model == '0') {
            requisicao.modelo_automovel = null
        }
        if (year == '0') {
            requisicao.ano_automovel = null
        }

        if (price == '0') {
            requisicao.preco_automovel1 = null
            requisicao.preco_automovel2 = null
        } else if (price == '1') {
            requisicao.preco_automovel1 = 6000
            requisicao.preco_automovel2 = 10000
        } else if (price == '2') {
            requisicao.preco_automovel1 = 10000
            requisicao.preco_automovel2 = 50000
        } else if (price == '3') {
            requisicao.preco_automovel1 = 50000
            requisicao.preco_automovel2 = 100000
        } else if (price == '4') {
            requisicao.preco_automovel1 = 100000
            requisicao.preco_automovel2 = 200000
        } else if (price == '5') {
            requisicao.preco_automovel1 = 300000
            requisicao.preco_automovel2 = 400000
        } else if (price == '6') {
            requisicao.preco_automovel1 = 400000
            requisicao.preco_automovel2 = 600000
        }
        setVehiclesFilter(find({
            marca_automovel: requisicao.marca_automovel,
            modelo_automovel: requisicao.modelo_automovel,
            ano_automovel: requisicao.ano_automovel,
            preco_automovel1: requisicao.preco_automovel1,
            preco_automovel2: requisicao.preco_automovel2
        }))
    }
    
    
    useEffect(() => {
        if (brand !== '0' || model !== '0' || year !== '0' || price !== '0') {
            getFilter()
        } else {
            setVehiclesFilter([])
            setFilter(false)        
        }
        if (countVehiclesFilter != 0){
            setAlertFilter(`${countVehiclesFilter} resultados encontrados!`)
        } else {
            setAlertFilter(`Faça sua filtragem!`)
        }

        console.log(countVehiclesFilter)
    }, [brand, model, year, price, countVehiclesFilter])

    const paginate = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const page = useMemo(() => {
        return Number(pageSelect.get('page') || '1')
    }, [pageSelect])

    useEffect(() => {
        setVehiclesPages(paginate(vehicles, limitList, page))

        const verificationCategorie = vehicles.every((item) => 
        item.categoria_automovel == 'Caminhotes' || 
        item.categoria_automovel == 'SUVs');

        if (verificationCategorie == true) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [page, vehicles])

    return (
        <div>
            <article className='dropdownInteraction'>
                <select className='dropdown' onChange={e => setBrand(e.target.value)}>
                    <option value='0'>Marca</option>
                    {brands.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}

                </select>
                <select disabled={disable} className='dropdown' onChange={e => setModel(e.target.value)} >
                    <option value='0'>Modelo</option>
                    {models.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setYear(e.target.value)} >
                    <option value='0'>Ano</option>
                    {years.map((item) => (
                        <>
                            <option value={item}>{item}</option>
                        </>
                    ))}
                </select>
                <select className='dropdown' onChange={e => setPrice(e.target.value)} >
                    <option value='0'>Faixa de preço</option>
                    <option value='1'>R$6.000,00 até 10.000,00</option>
                    <option value='2'>R$10.000,00 até 50.000,00</option>
                    <option value='3'>R$50.000,00 até 100.000,00</option>
                    <option value='4'>R$100.000,00 até 200.000,00</option>
                    <option value='5'>R$200.000,00 até 300.000,00</option>
                    <option value='6'>R$400.000,00 até 600.000,00</option>
                </select>

                <span style={{ color: '#808080' }}>{alertFilter}</span>

            </article>

            <figure className='vehicleList'>
                {!filter ? vehiclesPages.map((item) => (
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
                )) : vehiclesFilter.map((item) => (
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
                ))

                }

            </figure>
            {!filter ? (countVehicles > 0 && countVehicles != limitList) &&
                <Pagination
                    page={page}
                    onChange={(_, newPage) => setPageSelect({ page: newPage.toString() }, { replace: true })}
                    count={Math.ceil(countVehicles / limitList)}
                    variant="outlined"
                    shape="rounded"
                />
                : (countVehiclesFilter > 0 && countVehiclesFilter != limitList) &&
                <Pagination
                    page={page}
                    onChange={(_, newPage) => setPageSelect({ page: newPage.toString() }, { replace: true })}
                    count={Math.ceil(countVehiclesFilter / limitList)}
                    variant="outlined"
                    shape="rounded"
                />
            }
        </div>

    )
}

export default VehicleList;
import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/TopicsNavs.css'
import { useState, useEffect, useContext } from "react";
import { VehiclesContext } from '../context/vehicles'
import axios from "axios";

function TopicsNavs() {
    
    const { vehicles, setVehicles, getVehicles } = useContext(VehiclesContext)
    const [categorie, setCategorie] = useState('all')

    let requisicao = {
        categoria_automovel: null
    }

    const getFilterCategorie = () => {
        requisicao.categoria_automovel = categorie
        axios.post('https://api-cars-sale-blue.vercel.app/automoveis/filtrar-automoveis-categorias', requisicao)
        .then((response) => setVehicles(response.data))
    }

    useEffect(()  => {
        if (categorie != 'all'){
            getFilterCategorie()
        } else {
            getVehicles()
        }
    }, [categorie])

    return (

        <article className='listTopics'>
             <span id='all' onClick={(e) => setCategorie(e.target.id)}>
                Todas as ofertas
            </span>
            <span id='Carros Novos' onClick={(e) => setCategorie(e.target.id)}>
                Carros Novos
            </span>
            <span id='Carros Usados' onClick={(e) => setCategorie(e.target.id)}>
                Carros Usados
            </span>
            <span id='Carros Clássicos' onClick={(e) => setCategorie(e.target.id)}>
                Carros Clássicos
            </span>
            <span id='SUVs' onClick={(e) => setCategorie(e.target.id)}>
                SUVs
            </span>
            <span id='Caminhotes' onClick={(e) => setCategorie(e.target.id)}>
                Caminhotes
            </span>
        </article>


    )
}

export default TopicsNavs;
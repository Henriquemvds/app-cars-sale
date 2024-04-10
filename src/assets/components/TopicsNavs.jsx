import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/TopicsNavs.css'
import { useState, useEffect, useContext } from "react";
import { VehiclesContext } from '../context/vehicles'

function TopicsNavs() {
    
    const { vehicles, getVehicles } = useContext(VehiclesContext)

    return (

        <article className='listTopics'>
            <span>
                Carros Novos
            </span>
            <span>
                Carros Usados
            </span>
            <span>
                Carros Clássicos
            </span>
            <span>
                SUVs
            </span>
            <span>
                Caminhotes
            </span>
            <span>
                Motocicletas
            </span>
        </article>


    )
}

export default TopicsNavs;
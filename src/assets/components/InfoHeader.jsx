import { useState, useContext } from 'react'
import { VehiclesContext } from '../context/vehicles'
import '../styles/components/InfoHeader.css'

function InfoHeader() {

    const { vehicles } = useContext(VehiclesContext)

    let countVehicles = 0
  
    for(let i = 0; countVehicles < vehicles.length; i++){
        countVehicles = i
    }

    return (
        <div>
            <div className='folder'>
                <h2>
                    Principais Escolhas!
                </h2>
            </div>
            <div className='tips'>
                <span>Melhores ofertas: </span>
                <span><b>Procure carros de verão</b></span>
            </div>
            <div className='batch'>
                <h3>Carros ofertados pela categoria</h3>
                <span>{countVehicles}</span>
            </div>
        </div>
    )
}

export default InfoHeader;
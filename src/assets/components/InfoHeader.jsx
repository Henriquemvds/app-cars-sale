import { useState, useEffect } from 'react'
import '../styles/components/InfoHeader.css'

function InfoHeader({props}) {

    const [vehicles, setVehicles] = useState([])

    let countVehicles = 0

    const getVehicles = () => {
        props.map(() => setVehicles([...props]))
    }
    for(let i = 0; countVehicles < vehicles.length; i++){
        countVehicles = i
    }


   useEffect(() => {
        getVehicles()
    }, [props])

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
                <h3>Carros ofertados</h3>
                <span>{countVehicles}</span>
            </div>
        </div>
    )
}

export default InfoHeader;
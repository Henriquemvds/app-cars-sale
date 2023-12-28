import car from '../icons/car.svg'
import carExample from '../images/carWallpaper.jpg'
import '../styles/VehicleList.css'

function VehicleList() {

    return (
        <div className='items'>
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
                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>

                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>
                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>

                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>

                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>

                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>

                <div className='item'>
                    <img src={carExample} className='carExample' />
                    <div className='details'>
                        <span>nome do carro</span>
                        <div className='infoBatch'>
                            <span>2</span>
                            <img src={car} className='car'></img>
                        </div>
                    </div>
                    <span>
                        R$100.000,00
                    </span>
                </div>
            </figure>
        </div>
 
    )
}

export default VehicleList;
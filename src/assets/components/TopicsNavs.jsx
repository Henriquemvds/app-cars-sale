import car from '../icons/car.svg'
import '../styles/TopicsNavs.css'

function TopicsNavs() {

    return (
        <div className='topics'>
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

            <div className='linkSell'>
                <button>
                    Vender
                </button>
                <img src={car} className='car'/>
            </div>
        </div>

    )
}

export default TopicsNavs;
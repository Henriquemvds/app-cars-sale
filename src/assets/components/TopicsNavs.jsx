import car from '../icons/car.svg'
import '../styles/TopicsNavs.css'

function TopicsNavs() {

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

            <div className='linkSell'>
                <button>
                    Vender
                </button>
                <img src={car} className='car' />
            </div>
        </article>


    )
}

export default TopicsNavs;
import { Link } from "react-router-dom";
import iconCar from '../icons/car.svg'
import '../styles/components/TopicsNavs.css'

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
        </article>


    )
}

export default TopicsNavs;
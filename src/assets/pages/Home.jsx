import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../pages/Home.css'

function Home() {

const [vagas, setVagas] = useState([])


const getVacancies = () => {
    axios.get('http://localhost:3000/vagas')
    .then((response) => setVagas(response.data))
}

console.log(vagas)

useEffect(() => {
    getVacancies()
}, [])
    return (

        <section className='estacionamento'>   
            
            {vagas.map((vaga) => (
                <>
                         <Link to={`/detalhes-vaga/${vaga.id_vaga}`}> 
                              <div className="vagas">
                        {vaga.id_vaga}
                    </div>
                       </Link>
                </>
))}
             
          </section>
        
    )
}

export default Home;
import { Link } from "react-router-dom";
import '../pages/Home.css'

function Home() {


    return (

        <section className='estacionamento'>   
            <ul>
      
            <>
    <Link to={`/detalhes-vaga`} >
      <div className='vagas'>
       <li>
        1
        </li> 
    </div>
         </Link>
                            </>
   
    </ul>            
          </section>
        
    )
}

export default Home;
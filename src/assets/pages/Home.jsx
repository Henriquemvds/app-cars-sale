import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../pages/Home.css'

function Home() {

const [categories, setCategories] = useState([])


const getCategories = () => {
    axios.get('http://localhost:3000/categorias')
    .then((response) => setCategories(response.data))
}

useEffect(() => {
    getCategories()
}, [])

    return (

        <section className='estacionamento'>   
            
            {categories.map((categorie) => (
                <>
                         <Link to={`/categorias/${categorie.id_categoria}`}> 
                              <div className="vagas">
                        {categorie.id_categoria}
                    </div>
                       </Link>
                </>
))}
             
          </section>
        
    )
}

export default Home;
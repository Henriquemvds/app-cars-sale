import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../pages/Home.css'

function Home() {

const [categories, setCategories] = useState([])

categories.sort(function (a, b) {
    if (a.id_categoria > b.id_categoria) {
      return 1;
    }
    if (a.id_categoria < b.id_categoria) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

const getCategories = () => {
    axios.get('http://localhost:3000/categorias')
    .then((response) => setCategories(response.data))
}

useEffect(() => {
    getCategories()
}, [])

    return (
<section className="content">
    <h1>Cars Sale</h1>
    <p>Bem-vindo ao Cars Sale, aqui você pode comprar e vender o seu carro de acordo com a categoria selecionada: </p>
    <div className='categories'>   
            {categories.map((categorie) => (
                <>
                         <Link  style={{ textDecoration: 'none' }} to={`/categorias/${categorie.id_categoria}`}> 
                              <div className="list">
                                <span className="name">
                        {categorie.nome_categoria}
                                </span>
                        <img className="image_categorie" src={categorie.foto_categoria} />
                    </div>
                       </Link>
                </>
))}
</div>
             
</section>
        
    )
}

export default Home;
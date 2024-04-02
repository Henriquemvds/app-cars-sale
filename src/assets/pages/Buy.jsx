import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/pages/Buy.css'
import HeaderBuy from "../components/HeaderBuy"
import BuyItem from "../components/BuyItem"
import DetailsItem from "../components/DetailsItem"
import Footer from "../components/Footer"

function Buy() {

  const [vehicles, setVehicles] = useState([])

  let {id_automovel} = useParams()

  const getVehicles = () => {
    axios.get(`https://api-cars-sale-blue.vercel.app/automoveis/${id_automovel}`)
      .then((response) => setVehicles(response.data))
  }
 
  useEffect(() => {
    getVehicles()
  }, [])


  return (
    <main className="content">
      <header className="headerBuy">
        <HeaderBuy />
      </header>
      <div className="detailsPurchase">
        <section>
          <BuyItem props={vehicles} />
        </section>
        <section>
          <DetailsItem />
        </section>
      </div>
      <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Buy;
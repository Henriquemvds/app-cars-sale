import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/pages/Buy.css'
import HeaderBuy from "../components/HeaderBuy"
import BuyItem from "../components/BuyItem"
import DetailsItem from "../components/DetailsItem"
import Footer from "../components/Footer"

function Buy() {

  const [car, setCar] = useState([])
  const [seller, setSeller] = useState([])

  let { id_carro } = useParams()

  const Access = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "mode": "no-cors"
}

  const getCar = () => {
    axios.get(`https://api-cars-sale.vercel.app/carros/${id_carro}`, Access)
      .then((response) => setCar(response.data))
  }
  const getSeller = () => {
    car.map((item) => {
      axios.get(`https://api-cars-sale.vercel.app/vendedor/${item.id_vendedor}`, Access)
        .then((response) => setSeller(response.data))
    })
  }

  useEffect(() => {
    getCar()
  }, [])

  useEffect(() => {
    getSeller()
  }, [car])

  return (
    <main className="content">
      <header className="headerBuy">
        <HeaderBuy />
      </header>
      <div className="detailsPurchase">
        <section>
          <BuyItem props={car} />
        </section>
        <section>
          <DetailsItem props={seller} />
        </section>
      </div>
      <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Buy;
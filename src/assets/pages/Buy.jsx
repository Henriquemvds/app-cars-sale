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


  const getCar = () => {
    axios.get(`http://localhost:3000/carros/${id_carro}`)
      .then((response) => setCar(response.data))
  }
  const getSeller = () => {
    car.map((item) => {
      axios.get(`http://localhost:3000/vendedor/${item.id_vendedor}`)
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
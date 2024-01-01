import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Buy.css'
import HeaderBuy from "../components/HeaderBuy"
import BuyItem from "../components/BuyItem"
import DetailsItem from "../components/DetailsItem"
import Footer from "../components/Footer"

function Buy() {

  return (
    <main className="content">
      <header className="headerBuy">
        <HeaderBuy />
      </header>
      <div className="detailsPurchase">
        <section>
          <BuyItem />
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
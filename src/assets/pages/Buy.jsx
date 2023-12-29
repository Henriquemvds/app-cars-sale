import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Buy.css'
import OptionsHeader from "../components/OptionsHeader"
import Footer from "../components/Footer"

function Buy() {

  return (
    <main className="content">
        <header className="options">
            <OptionsHeader />
        </header>
       <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Buy;
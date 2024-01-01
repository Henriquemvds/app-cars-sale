import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Sell.css'
import HeaderSell from "../components/HeaderSell"
import Footer from "../components/Footer"

function Sell() {

    return (
        <main className="content">
            <header className="headerSell">
                <HeaderSell />
            </header>
            <footer className='about'>
                <Footer />
            </footer>
        </main>

    )
}

export default Sell;
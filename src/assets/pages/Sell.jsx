import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/pages/Sell.css'
import HeaderSell from "../components/HeaderSell"
import FormSell from "../components/FormSell"
import Footer from "../components/Footer"

function Sell() {

    return (
        <main className="content">
            <header className="headerSell">
                <HeaderSell />
            </header>
            <form className="formSell">
                <FormSell />
            </form>
            <footer className='about'>
                <Footer />
            </footer>
        </main>

    )
}

export default Sell;
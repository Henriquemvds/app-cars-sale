import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/pages/_Home.css'
import TopicsNavs from "../components/TopicsNavs"
import InfoHeader from "../components/InfoHeader"
import VehicleList from "../components/VehicleList"
import Footer from "../components/Footer"

function Home() {

  return (
    <main className="content">
      <header className="header">
        <h2>
          Cars sale
        </h2>
      </header>
      <nav className='topics'>
        <TopicsNavs />
      </nav>
      <header className='info'>
        <InfoHeader />
      </header>
      <section className="items">
        <VehicleList />
      </section>
      <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Home;
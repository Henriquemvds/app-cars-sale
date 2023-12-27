import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Home.css'
import TopicsNavs from "../components/TopicsNavs";
import InfoHeader from "../components/InfoHeader";

function Home() {

  return (
    <main className="content">
      <header className="header">
        <h2>
          Cars sale
        </h2>
      </header>
      <nav>
        <TopicsNavs />
      </nav>
      <header>
        <InfoHeader />
      </header>
    </main>

  )
}

export default Home;
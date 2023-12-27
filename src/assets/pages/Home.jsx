import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Home.css'
import TopicsNavs from "../components/TopicsNavs";

function Home() {

  return (
    <main className="content">
      <header className="header">
        <span>
          Cars sale
        </span>
      </header>
      <nav>
        <TopicsNavs />
      </nav>
    </main>

  )
}

export default Home;
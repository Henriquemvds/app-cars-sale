import '../styles/pages/Buy.css'
import HeaderBuy from "../components/HeaderBuy"
import BuyItem from "../components/BuyItem"
import Footer from "../components/Footer"

function Buy() {
 
  return (
    <main className="content">
      <header className="headerBuy">
        <HeaderBuy />
      </header>
      <div className="detailsPurchase">
        <section>
          <BuyItem/>
        </section>
      </div>
      <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Buy;